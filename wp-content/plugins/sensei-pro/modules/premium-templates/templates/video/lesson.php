<?php
/**
 * Video template for displaying lesson in learning mode.
 *
 * @author      Automattic
 * @package     sensei-pro
 * @category    Templates
 * @version     1.20.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<!-- wp:sensei-lms/ui {"elementClass":"sensei-course-theme__header","className":"sensei-version--4-8-0"} -->
<div class="wp-block-sensei-lms-ui sensei-course-theme__frame sensei-version--4-8-0 sensei-course-theme__header">
	<!-- wp:group {"style":{"spacing":{"margin":{"top":"0px","bottom":"0px"},"padding":{"top":"6px","right":"24px","bottom":"6px","left":"24px"},"blockGap":"0px"},"border":{"bottom":{"color":"#dddddd","width":"1px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group"
		style="border-bottom-color:#dddddd;border-bottom-width:1px;margin-top:0px;margin-bottom:0px;padding-top:6px;padding-right:24px;padding-bottom:6px;padding-left:24px">
		<!-- wp:group {"style":{"spacing":{"blockGap":"12px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left","verticalAlignment":"center"}} -->
		<div class="wp-block-group"><!-- wp:site-logo {"width":50} /-->

			<!-- wp:sensei-lms/course-title /--></div>
		<!-- /wp:group -->

		<!-- wp:group {"style":{"spacing":{"blockGap":"12px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:sensei-lms/exit-course /-->

			<!-- wp:sensei-lms/sidebar-toggle-button /--></div>
		<!-- /wp:group --></div>
	<!-- /wp:group -->
	<!-- wp:sensei-lms/course-theme-course-progress-bar {"className":"sensei-course-theme-utils-hide-on-desktop"} /-->
</div>
<!-- /wp:sensei-lms/ui -->

<!-- wp:group {"className":"sensei-course-theme__main-content","layout":{"contentSize":"1244px","wideSize":"1244px"},"style":{"spacing":{"blockGap":"2em"}}} -->
<div class="wp-block-group sensei-course-theme__main-content"><!-- wp:columns -->
	<div class="wp-block-columns"><!-- wp:column {"verticalAlignment":"center","width":"900px"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:900px">
			<!-- wp:post-title {"level":1} /-->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"320px"} -->
		<div class="wp-block-column is-vertically-aligned-center sensei-course-theme__empty-column" style="flex-basis:320px"><!-- wp:paragraph -->
			<p></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:sensei-lms/ui {"elementClass":"sensei-course-theme__video-container","style":{"spacing":{"padding":{"top":"20px","right":"10px","bottom":"20px","left":"20px"}}},"layout":{"inherit":false}} -->
	<div class="wp-block-sensei-lms-ui sensei-course-theme__video-container"
		style="padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:20px">
		<!-- wp:sensei-lms/course-theme-lesson-video /-->

		<!-- wp:sensei-lms/ui {"elementClass":"sensei-course-theme__sidebar"} -->
		<div class="wp-block-sensei-lms-ui sensei-course-theme__frame sensei-course-theme__sidebar">
			<!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"left"},"style":{"spacing":{"padding":{"top":"12px","right":"0px","bottom":"12px","left":"0px"},"blockGap":"12px"}}} -->
			<div class="wp-block-group sensei-course-theme__sidebar-progress"
				style="padding-top:12px;padding-right:0px;padding-bottom:12px;padding-left:0px">
				<!-- wp:sensei-lms/course-theme-course-progress-counter /-->

				<!-- wp:sensei-lms/course-theme-course-progress-bar {"className":"sensei-course-theme-utils-hide-on-mobile"} /-->
			</div>
			<!-- /wp:group -->

			<!-- wp:sensei-lms/course-navigation /-->
		</div>
		<!-- /wp:sensei-lms/ui -->
	</div>
	<!-- /wp:sensei-lms/ui -->

	<!-- wp:columns {"verticalAlignment":"top","style":{"spacing":{"margin":{"top":"0px","bottom":"0px"}}}} -->
	<div class="wp-block-columns are-vertically-aligned-top" style="margin-top:0px;margin-bottom:0px">
		<!-- wp:column {"verticalAlignment":"top","width":"900px"} -->
		<div class="wp-block-column is-vertically-aligned-top" style="flex-basis: 900px">
			<!-- wp:group {"layout":{"type":"default"},"style":{"spacing":{"margin":{"top":"32px","bottom":"32px"}}}} -->
			<div class="wp-block-group" style="margin-top:32px;margin-bottom:32px">
				<!-- wp:sensei-lms/course-theme-notices /-->

				<!-- wp:post-content {"layout":{"inherit":true}} /-->

				<!-- wp:group {"style":{"spacing":{"margin":{"top":"40px"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group" style="margin-top:40px">
					<!-- wp:sensei-lms/page-actions {"style":{"spacing":{"blockGap":"43px"}}} /-->

					<!-- wp:group {"style":{"spacing":{"margin":{"top":"20px"}}},"className":"sensei-lesson-footer","layout":{"type":"flex","flexWrap":"nowrap"}} -->
					<div class="wp-block-group sensei-lesson-footer" style="margin-top:20px">
						<!-- wp:sensei-lms/lesson-actions {"toggledBlocks":{"sensei-lms/button-reset-lesson":false}} -->
						<div class="wp-block-sensei-lms-lesson-actions">
							<div class="sensei-buttons-container">
								<!-- wp:sensei-lms/button-complete-lesson {"inContainer":true,"className":"is-style-outline"} -->
								<div class="wp-block-sensei-lms-button-complete-lesson is-style-outline sensei-buttons-container__button-block wp-block-sensei-lms-button-complete-lesson__wrapper"><div class="wp-block-sensei-lms-button-complete-lesson is-style-outline wp-block-sensei-button wp-block-button has-text-align-left"><button class="wp-block-button__link sensei-stop-double-submission"><?php esc_html_e( 'Complete Lesson', 'sensei-pro' ); ?></button></div></div>
								<!-- /wp:sensei-lms/button-complete-lesson -->

								<!-- wp:sensei-lms/button-view-quiz {"inContainer":true} -->
								<div class="wp-block-sensei-lms-button-view-quiz is-style-default sensei-buttons-container__button-block wp-block-sensei-lms-button-view-quiz__wrapper"><div class="wp-block-sensei-lms-button-view-quiz is-style-default wp-block-sensei-button wp-block-button has-text-align-left"><button class="wp-block-button__link"><?php esc_html_e( 'Take Quiz', 'sensei-pro' ); ?></button></div></div>
								<!-- /wp:sensei-lms/button-view-quiz -->

								<!-- wp:sensei-lms/button-lesson-completed {"inContainer":true,"className":"is-style-outline"} -->
								<div class="wp-block-sensei-lms-button-lesson-completed is-style-outline sensei-buttons-container__button-block wp-block-sensei-lms-button-lesson-completed__wrapper"><div class="wp-block-sensei-lms-button-lesson-completed is-style-outline wp-block-sensei-button wp-block-button has-text-align-left"><button class="wp-block-button__link"><?php esc_html_e( 'Completed', 'sensei-pro' ); ?></button></div></div>
								<!-- /wp:sensei-lms/button-lesson-completed -->

								<!-- wp:sensei-lms/button-next-lesson {"inContainer":true} -->
								<div class="wp-block-sensei-lms-button-next-lesson is-style-default sensei-buttons-container__button-block wp-block-sensei-lms-button-next-lesson__wrapper"><div class="wp-block-sensei-lms-button-next-lesson is-style-default wp-block-sensei-button wp-block-button has-text-align-left"><button class="wp-block-button__link"><?php esc_html_e( 'Next Lesson', 'sensei-pro' ); ?></button></div></div>
								<!-- /wp:sensei-lms/button-next-lesson -->
							</div>
						</div>
						<!-- /wp:sensei-lms/lesson-actions -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"top","width":"320px"} -->
		<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:320px">
			<!-- wp:sensei-lms/ui {"elementClass":"sensei-course-theme__sidebar","className":"sensei-course-theme__secondary-sidebar","style":{"spacing":{"margin":{"top":"32px","right":"0px","bottom":"32px","left":"0px"}}}} -->
			<div class="wp-block-sensei-lms-ui sensei-course-theme__frame sensei-course-theme__sidebar sensei-course-theme__secondary-sidebar"
				style="margin-top:32px;margin-right:0px;margin-bottom:32px;margin-left:0px">
				<!-- wp:group {"style":{"spacing":{"margin":{"top":"0px","bottom":"0px"}}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group" style="margin-top:0px;margin-bottom:0px">
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:sensei-lms/ui -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:sensei-lms/ui {"elementClass":"sensei-course-theme__content-footer"} -->
	<div class="wp-block-sensei-lms-ui sensei-course-theme__frame sensei-course-theme__content-footer">
		<!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"24px","right":"0px","left":"0px"},"margin":{"top":"0px","bottom":"0px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
		<div class="wp-block-group"
			style="margin-top:0px;margin-bottom:0px;padding-top:24px;padding-right:0px;padding-bottom:24px;padding-left:0px">
			<!-- wp:group {"style":{"spacing":{"padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"blockGap":"12px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
			<div class="wp-block-group" style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px">
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:sensei-lms/ui -->
</div>
<!-- /wp:group -->
