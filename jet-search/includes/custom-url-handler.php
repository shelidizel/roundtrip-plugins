<?php
/**
 * Jet_Search_Custom_URL_Handler class
 *
 * @package   jet-search
 * @author    Zemez
 * @license   GPL-2.0+
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Search_Custom_URL_Handler' ) ) {

	/**
	 * Define Jet_Search_Custom_URL_Handler class
	 */
	class Jet_Search_Custom_URL_Handler {

		private $settings = null;

		/**
		 * Search query.
		 *
		 * @var array
		 */
		public $search_query = array();

		public function __construct() {

			// catch all queries where we need to inject search query
			if ( $this->get_search_string() && $this->allow_handle_custom_results_page() ) {
				add_action( 'pre_get_posts', array( $this, 'handle_custom_results_page' ) );
				add_action( 'jet-engine/query-builder/query/after-query-setup', array( $this, 'final_query_setup' ) );
			}
		}

		public function final_query_setup( $query ) {
			if ( empty( $this->search_query ) ) {
				$args = $this->get_settings();

				$this->set_query_settings( $args );
			}

			if ( isset( $query->final_query['_query_type'] ) && ! empty( $query->final_query['_query_type'] ) && ( isset( $query->final_query['post_type'] ) || 'wc-product-query' === $query->final_query['_query_type'] ) ) {
				$request_query     = jet_smart_filters()->query->get_query_from_request();
				$search_post_type  = ! is_array( $this->search_query['post_type'] ) ? [ $this->search_query['post_type'] ] : $this->search_query['post_type'];

				if ( 'wc-product-query' === $query->final_query['_query_type'] ) {
					$current_post_type = array( 'product' );
				} else {
					$current_post_type = $query->final_query['post_type'];
				}

				if ( 'any' === $search_post_type[0] || ! empty( array_intersect( $current_post_type, $search_post_type ) ) ) {
					$query->final_query            = array_merge( $query->final_query, $this->search_query );
					$query->final_query['s']       = $this->get_search_string();
					$query->final_query['orderby'] = [ $query->final_query['orderby'] ];

					if ( isset( $request_query ) && ! empty( $request_query ) ) {
						$query->final_query = array_merge( $query->final_query, $request_query );
					}
				}
			}
		}

		/**
		 * Check if we need to automatically handle query on custom results page.
		 * Use 'jet-search/custom-url-handler/allowed' hook to disable auto-handle
		 * and manually add required search parameters on query you need
		 *
		 * @return bool
		 */
		public function allow_handle_custom_results_page() {
			return apply_filters( 'jet-search/custom-url-handler/allowed', true );
		}

		/**
		 * Get search query from request
		 *
		 * @return [type] [description]
		 */
		public function get_search_string() {

			$search_key    = jet_search_ajax_handlers()->get_custom_search_query_param();
			$search_string = isset( $_REQUEST[ $search_key ] ) ? $_REQUEST[ $search_key ] : false;

			return $search_string;

		}

		/**
		 * Get current search settings (from URL or defaults)
		 *
		 * @param  string $setting [description]
		 * @return [type]          [description]
		 */
		public function get_settings( $setting = '' ) {

			if ( null === $this->settings ) {
				$this->settings = jet_search_ajax_handlers()->get_form_settings();
			}

			if ( ! $setting ) {
				return $this->settings;
			} else {
				return ( isset( $this->settings[ $setting ] ) ) ? $this->settings[ $setting ] : false;
			}

		}

		/**
		 * Check if given query is query to search for
		 *
		 * @param  [type]  $query [description]
		 * @return boolean        [description]
		 */
		public function is_search_query( $query ) {

			$result = false;

			// if is any archive page - apply results only to main query
			if ( $query->is_archive() || $query->is_posts_page ) {
				$result = $query->is_main_query();
			} else {

				// for any other page - apply search paramters to any query with the same post type
				// if post type not set - doesn't apply search automatically, because is a high risk to break the page
				$search_in_post_type = $this->get_settings( 'search_source' );
				$query_post_type     = $query->get( 'post_type' );

				if ( ! empty( $search_in_post_type ) && ! empty( $query_post_type ) ) {
					$query_post_type     = ! is_array( $query_post_type ) ? [ $query_post_type ] : $query_post_type;
					$search_in_post_type = ! is_array( $search_in_post_type ) ? [ $search_in_post_type ] : $search_in_post_type;

					if ( 'any' === $search_in_post_type || ! empty( array_intersect( $search_in_post_type, $query_post_type ) ) ) {
						$result = true;
					}
				}

			}

			return apply_filters( 'jet-search/custom-url-handler/is-search-query', $result, $query );
		}

		/**
		 * Check if is query to apply search for and set required parameters if is.
		 *
		 * @param  [type] $query [description]
		 * @return [type]        [description]
		 */
		public function handle_custom_results_page( $query ) {

			if ( ! $this->is_search_query( $query ) ) {
				return;
			}

			$args = $this->get_settings();

			$this->set_query_settings( $args );

			$query->set( 's', $this->get_search_string() );

			if ( ! empty( $this->search_query ) ) {
				foreach ( $this->search_query as $key => $value ) {
					$query->set( $key, $value );
					$query->query[$key] = $value;
				}
			}
		}

		protected function set_query_settings( $args = array() ) {
			if ( $args ) {
				$this->search_query['jet_ajax_search'] = true;
				$this->search_query['cache_results']   = true;
				$this->search_query['post_type']       = $args['search_source'];
				$this->search_query['order']           = isset( $args['results_order'] ) ? $args['results_order'] : '';
				$this->search_query['orderby']         = isset( $args['results_order_by'] ) ? $args['results_order_by'] : '';
				$this->search_query['tax_query']       = array( 'relation' => 'AND' );
				$this->search_query['sentence']        = isset( $args['sentence'] ) ? filter_var( $args['sentence'], FILTER_VALIDATE_BOOLEAN ) : false;
				$this->search_query['post_status']     = 'publish';

				// Include specific terms
				if ( ! empty( $args['category__in'] ) ) {
					$tax = ! empty( $args['search_taxonomy'] ) ? $args['search_taxonomy'] : 'category';

					array_push(
						$this->search_query['tax_query'],
						array(
							'taxonomy' => $tax,
							'field'    => 'id',
							'operator' => 'IN',
							'terms'    => $args['category__in'],
						)
					);
				} else if ( ! empty( $args['include_terms_ids'] ) ) {

					$include_tax_query = array( 'relation' => 'OR' );
					$terms_data        = $this->prepare_terms_data( $args['include_terms_ids'] );

					foreach ( $terms_data as $taxonomy => $terms_ids ) {
						$include_tax_query[] = array(
							'taxonomy' => $taxonomy,
							'field'    => 'id',
							'operator' => 'IN',
							'terms'    => $terms_ids,
						);
					}

					array_push(
						$this->search_query['tax_query'],
						$include_tax_query
					);
				}

				// Exclude specific terms
				if ( ! empty( $args['exclude_terms_ids'] ) ) {

					$exclude_tax_query = array( 'relation' => 'OR' );
					$terms_data        = $this->prepare_terms_data( $args['exclude_terms_ids'] );

					foreach ( $terms_data as $taxonomy => $terms_ids ) {
						$exclude_tax_query[] = array(
							'taxonomy' => $taxonomy,
							'field'    => 'id',
							'operator' => 'NOT IN',
							'terms'    => $terms_ids,
						);
					}

					array_push(
						$this->search_query['tax_query'],
						$exclude_tax_query
					);
				}

				// Exclude specific posts
				if ( ! empty( $args['exclude_posts_ids'] ) ) {
					$this->search_query['post__not_in'] = $args['exclude_posts_ids'];
				}

				// Current Query
				if ( ! empty( $args['current_query'] ) ) {
					$this->search_query = array_merge( $this->search_query, (array) $args['current_query'] );
				}

				do_action( 'jet-search/ajax-search/search-query', $this, $args );
			}
		}

		/**
		 * Prepare terms data for tax query
		 *
		 * @since  2.0.0
		 * @param  array $terms_ids
		 * @return array
		 */
		public function prepare_terms_data( $terms_ids = array() ) {

			$result = array();

			foreach ( $terms_ids as $term_id ) {
				$term     = get_term( $term_id );
				$taxonomy = $term->taxonomy;

				$result[ $taxonomy ][] = $term_id;
			}

			return $result;
		}

	}

}
