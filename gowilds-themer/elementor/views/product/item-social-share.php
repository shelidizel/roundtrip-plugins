<?php
   if (!defined('ABSPATH')){ exit; }

   global $gowilds_post;
   if( !$gowilds_post || $gowilds_post->post_type != 'product' ){ return; }
   
   $post_id = $gowilds_post->ID;

   $post_title = $gowilds_post->post_title;
   $post_permalink = get_permalink($post_id);

   $this->add_render_attribute('block', 'class', [ 'item-social-share' ]);
?>

<div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
      <ul class="social-networks-post clearfix">  
         <li class="title-share"><?php echo esc_html__( "Share: ", "gowilds-themer" ) ?></li>
         <li class="facebook">
            <a data-toggle="tooltip" data-placement="top" data-animation="true"  data-original-title="Facebook" href="http://www.facebook.com/sharer.php?u=<?php echo urlencode($post_permalink); ?>&title=<?php echo urlencode($post_title); ?>" target="_blank">
               <i class="fab fa-facebook-f"></i>
            </a>
         </li>

         <li class="twitter">
            <a data-toggle="tooltip" data-placement="top" data-animation="true"  data-original-title="Twitter" href="http://twitter.com/share?text=<?php echo urlencode($post_title); ?>&url=<?php echo urlencode($post_permalink); ?>" target="_blank">
               <i class="fab fa-twitter"></i>
            </a>
         </li>

         <li class="linkedin">
            <a data-toggle="tooltip" data-placement="top" data-animation="true"  data-original-title="LinkedIn" href="http://linkedin.com/shareArticle?mini=true&amp;url=<?php echo urlencode($post_permalink); ?>&amp;title=<?php echo urlencode($post_title); ?>" target="_blank">
               <i class="fab fa-linkedin-in"></i>
            </a>
         </li>

         <li class="tumblr">
            <a data-toggle="tooltip" data-placement="top" data-animation="true"  data-original-title="Tumblr" href="http://www.tumblr.com/share/link?url=<?php echo urlencode($post_permalink); ?>&amp;name=<?php echo urlencode($post_title); ?>&amp;description=<?php echo urlencode(get_the_excerpt()); ?>" target="_blank">
               <i class="fab fa-tumblr"></i>
            </a>
         </li>
      </ul>
</div>