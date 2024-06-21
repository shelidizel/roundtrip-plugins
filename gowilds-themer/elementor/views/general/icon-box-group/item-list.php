<?php 
	use Elementor\Icons_Manager;
	$has_icon = !empty($item['selected_icon']['value']);
	$style = $settings['style'];
	$active = $item['active']=='yes' ? ' active' : '';
?>

<div class="icon-box-item elementor-repeater-item-<?php echo $item['_id'] ?>">
		<?php 
			if( $style == 'style-1' ){
				echo '<div class="feature-list-one__single' . $active . '">';
					echo '<div class="feature-list-one__wrapper">';
						
						echo '<div class="feature-list-one__icon-inner">';
							echo '<div class="feature-list-one__icon-check"></div>';
							if($has_icon){ 
								echo '<div class="feature-list-one__icon">';
									Icons_Manager::render_icon($item['selected_icon'], [ 'aria-hidden' => 'true' ]); 
								echo '</div>';
							}
						echo '</div>';	

						echo '<div class="feature-list-one__content">';
							if($item['title']){
								echo '<h3 class="feature-list-one__title">' . $item['title'] . '</h3>';
							}
							
							if($item['desc']){ 
								echo '<div class="feature-list-one__desc">' .$item['desc'] . '</div>';
							}
						echo '</div>';	
						
					echo '</div>';	
			 		$this->gva_render_link_html('', $item['link'], 'iconbox-one__link-overlay');
				echo '</div>';	
			}
		?>

		<?php 
			if( $style == 'style-2' ){
				echo '<div class="iconbox-two__single' . $active . '">';
					echo '<div class="iconbox-two__content">';
						if($has_icon){ 
							echo '<div class="iconbox-two__icon">';
								Icons_Manager::render_icon($item['selected_icon'], [ 'aria-hidden' => 'true' ]); 
							echo '</div>';
						}
						echo '<div class="iconbox-two__content-inner">';
							if($item['title']){ 
								echo '<h3 class="iconbox-two__title">' . $item['title'] . '</h3>';
							}
							if($item['desc']){ 
								echo '<div class="iconbox-two__desc">' .$item['desc'] . '</div>';
							}
						echo '</div>';	
					echo '</div>';	
				 	$this->gva_render_link_html('', $item['link'], 'iconbox-two__link-overlay');
				echo '</div>';	
			}
		?>
</div>