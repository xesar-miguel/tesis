<%@page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%-- definir el folder de la plantilla --%>
<c:choose>
	<c:when test="${empty _template}">
		<c:set var="_folder" value="default" />
	</c:when>
	<c:otherwise>
		<c:set var="_folder" value="${_template}" />
	</c:otherwise>
</c:choose>


<!DOCTYPE html>
<html lang="es">
<head>

<title>Registro Nacional de IPRES</title>

<link href="css/jquery-ui.css" rel="stylesheet">

<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- MetisMenu CSS -->
<link href="css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">

<!-- Bootstrap tree -->
<link rel="stylesheet" href="css/jquery.treegrid.css">

<link href="css/plugins/dataTables.bootstrap.css" rel="stylesheet">

<link href="css/sb-admin-2.css" rel="stylesheet">
    
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta http-equiv="Expires" content="0" />
<meta http-equiv="Pragma" content="no-cache" />

<c:choose>
	<c:when test="${empty _meta}">
		<c:import url="${_folder}/default-meta.jsp" />
	</c:when>
	<c:otherwise>
		<c:import url="${_folder}/${_meta}.jsp" />
	</c:otherwise>
</c:choose>

<title>Registro Nacional de IPRES</title>

<link href="css/jquery-ui.css" rel="stylesheet">

<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- MetisMenu CSS -->
<link href="css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">

<!-- Bootstrap tree -->
<link rel="stylesheet" href="css/jquery.treegrid.css">

<link href="css/plugins/dataTables.bootstrap.css" rel="stylesheet">

<!-- MetisFolder CSS -->
<!-- <link href="css/metisFolder.css" rel="stylesheet">  -->

<!-- Custom CSS -->
<link href="css/sb-admin-2.css" rel="stylesheet">


<!-- Bootbox code  dlarico 23/10/2015-->
<link href="css/bootbox/main.css" rel="stylesheet" type="text/css" />

<style type="text/css">


/*Style to tab disabled funciotnality*/
.disabledTab {
    pointer-events: none;
}

/**
 * Table of Contents:
 *
 * 1.0 - Repeatable Patterns
 * 2.0 - Basic Structure
 * 3.0 - Header
 * 4.0 - Navigation
 * 5.0 - Widget
 * 6.0 - Content
        6.1 - Home Page
        6.2 - Sub Page
 * 7.0 - Footer
 * -----------------------------------------------------------------------------
 */
/**
 * SASS variables and functions
 * -----------------------------------------------------------------------------
 */

/*CAMBIO DE COLOR DE GRILLAS*/ 
.k-grid th.k-header,
.k-grid th.k-header .k-link
{
    color:white;
}
 
 
/***  %Name  ***/
a, .kopa-button, .search-box .search-form .search-submit, .main-menu > li > a:before, .main-menu > li > a:after, .home-slider-widget .kopa-home-slider .flex-direction-nav li, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li, .kopa-portfolio-widget .author-info .social-links li, .portfolio-list .portfolio-item .portfolio-thumb .thumb-hover, .portfolio-list .portfolio-item .portfolio-thumb .thumb-hover ul, .kopa-newsletter-widget .newsletter-form .input-email .email, .kopa-newsletter-widget .newsletter-form .input-email .submit, .filters-options li, .filters-options2 li, .filters-options li:before, .filters-options2 li:before, .filters-options li:after, .filters-options2 li:after, .kopa-team-widget .owl-carousel-4 .owl-controls .owl-buttons div:hover, .kopa-loadmore span:hover, #back-top a, .kopa-product-list-widget .entry-item .entry-thumb .thumb-hover, .kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul, .kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul li, .contact-button > span input, .norma-search-button > span input, ul#menu-butons-2 li ul, .hover-text-efecct, .hover-text-efecct > h6, .hover-text-efecct > p, .hover-text-efecct > div div p {
  transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; }

.main-nav-mobile .main-menu-mobile > li span:after, .main-nav-mobile .main-menu-mobile > li.open span:after, .widget_categories > ul > li:before,
.widget_recent_entries > div > ul > li:before,
.widget_recent_entries > ul > li:before,
.widget_archive > ul > li:before,
.widget_meta > ul > li:before,
.widget_nav_menu > ul > li:before,
.widget_pages > ul > li:before,
.widget_recent_comments > ul > li:before,
.widget_rss > ul > li:before, .kopa-testimonial-2-widget .item > p:before, .kopa-testimonial-2-widget .item > p:after, .portfolio-thumb .thumb-icon, .entry-thumb .thumb-icon, .kopa-pagination a.prev, .kopa-pagination a.next, .contact-button > span:before, .norma-search-button > span:before {
  display: inline-block;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.main-menu > li ul li:first-child, .main-nav-mobile .main-menu-mobile li:first-child, .article-list-1 > ul li:first-child, .kopa-twitter-widget > ul li:first-child, .kopa-twitter-widget .owl-carousel .item > ul li:first-child, .kopa-mission-list li:first-child, .kopa-event-widget .kopa-event-content .event-post-content > ul li:first-child, .kopa-rating ul li:first-child, .social-links.style2 li:first-child {
  margin: 0;
  padding: 0;
  border: 0; }

.pricing-table:before, .kopa-tab-2-widget .nav-tabs li:before, .mb-10:before, .mb-20:before, .mb-30:before, .mb-60:before, .wrapper:before, .widget:before, .kopa-portfolio-widget .portfolio-detail:before, .kopa-area:before, .kopa-area-3:before, .kopa-portfolio-2-widget:before, .kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption:before, .kopa-event-widget .kopa-event-content:before, .entry-meta:before, .left-area:before, .right-area:before, .kopa-portfolio-page .kopa-portfolio-widget .portfolio-list:before, .kopa-rating ul:before, #comments .kopa-pagination:before, .single-other-post:before, .kopa-tagline-2-widget .tagline-left:before, .pricing-table:after, .kopa-tab-2-widget .nav-tabs li:after, .mb-10:after, .mb-20:after, .mb-30:after, .mb-60:after, .wrapper:after, .widget:after, .kopa-portfolio-widget .portfolio-detail:after, .kopa-area:after, .kopa-area-3:after, .kopa-portfolio-2-widget:after, .kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption:after, .kopa-event-widget .kopa-event-content:after, .entry-meta:after, .left-area:after, .right-area:after, .kopa-portfolio-page .kopa-portfolio-widget .portfolio-list:after, .kopa-rating ul:after, #comments .kopa-pagination:after, .single-other-post:after, .kopa-tagline-2-widget .tagline-left:after {
  content: "";
  display: table; }

.pricing-table:after, .kopa-tab-2-widget .nav-tabs li:after, .mb-10:after, .mb-20:after, .mb-30:after, .mb-60:after, .wrapper:after, .widget:after, .kopa-portfolio-widget .portfolio-detail:after, .kopa-area:after, .kopa-area-3:after, .kopa-portfolio-2-widget:after, .kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption:after, .kopa-event-widget .kopa-event-content:after, .entry-meta:after, .left-area:after, .right-area:after, .kopa-portfolio-page .kopa-portfolio-widget .portfolio-list:after, .kopa-rating ul:after, #comments .kopa-pagination:after, .single-other-post:after, .kopa-tagline-2-widget .tagline-left:after {
  clear: both; }

/*** Functions ***/
/*** Thriller ***/
/*
.entry-date.style1 > span.entry-day {
  text-shadow: #00719f 1px 1px, #00719f 2px 2px, #00719f 3px 3px, #0071a0 4px 4px, #0071a0 5px 5px, #0072a0 6px 6px, #0072a0 7px 7px, #0072a1 8px 8px, #0072a1 9px 9px, #0072a1 10px 10px, #0073a1 11px 11px, #0073a2 12px 12px, #0073a2 13px 13px, #0073a2 14px 14px, #0073a3 15px 15px, #0074a3 16px 16px, #0074a3 17px 17px, #0074a3 18px 18px, #0074a4 19px 19px, #0074a4 20px 20px, #0074a4 21px 21px, #0075a4 22px 22px, #0075a5 23px 23px, #0075a5 24px 24px, #0075a5 25px 25px, #0075a5 26px 26px, #0076a6 27px 27px, #0076a6 28px 28px, #0076a6 29px 29px, #0076a7 30px 30px, #0076a7 31px 31px, #0077a7 32px 32px, #0077a7 33px 33px, #0077a8 34px 34px, #0077a8 35px 35px, #0077a8 36px 36px, #0077a8 37px 37px, #0078a9 38px 38px, #0078a9 39px 39px, #0078a9 40px 40px, #0078a9 41px 41px, #0078aa 42px 42px, #0079aa 43px 43px, #0079aa 44px 44px, #0079ab 45px 45px, #0079ab 46px 46px, #0079ab 47px 47px, #007aab 48px 48px, #007aac 49px 49px, #007aac 50px 50px, #007aac 51px 51px, #007aac 52px 52px, #007aad 53px 53px, #007bad 54px 54px, #007bad 55px 55px, #007bae 56px 56px, #007bae 57px 57px, #007bae 58px 58px, #007cae 59px 59px, #007caf 60px 60px, #007caf 61px 61px, #007caf 62px 62px, #007caf 63px 63px, #007db0 64px 64px, #007db0 65px 65px, #007db0 66px 66px, #007db0 67px 67px, #007db1 68px 68px, #007eb1 69px 69px, #007eb1 70px 70px, #007eb2 71px 71px, #007eb2 72px 72px, #007eb2 73px 73px, #007eb2 74px 74px, #007fb3 75px 75px, #007fb3 76px 76px, #007fb3 77px 77px, #007fb3 78px 78px, #007fb4 79px 79px, #0080b4 80px 80px, #0080b4 81px 81px, #0080b4 82px 82px, #0080b5 83px 83px, #0080b5 84px 84px, #0081b5 85px 85px, #0081b6 86px 86px, #0081b6 87px 87px, #0081b6 88px 88px, #0081b6 89px 89px, #0081b7 90px 90px, #0082b7 91px 91px, #0082b7 92px 92px, #0082b7 93px 93px, #0082b8 94px 94px, #0082b8 95px 95px, #0083b8 96px 96px, #0083b9 97px 97px, #0083b9 98px 98px, #0083b9 99px 99px, #0083b9 100px 100px, #0084ba 101px 101px, #0084ba 102px 102px, #0084ba 103px 103px, #0084ba 104px 104px, #0084bb 105px 105px, #0084bb 106px 106px, #0085bb 107px 107px, #0085bb 108px 108px, #0085bc 109px 109px, #0085bc 110px 110px, #0085bc 111px 111px, #0086bd 112px 112px, #0086bd 113px 113px, #0086bd 114px 114px, #0086bd 115px 115px, #0086be 116px 116px, #0087be 117px 117px, #0087be 118px 118px, #0087be 119px 119px, #0087bf 120px 120px, #0087bf 121px 121px, #0087bf 122px 122px, #0088bf 123px 123px, #0088c0 124px 124px, #0088c0 125px 125px, #0088c0 126px 126px, #0088c1 127px 127px, #0089c1 128px 128px, #0089c1 129px 129px, #0089c1 130px 130px, #0089c2 131px 131px, #0089c2 132px 132px, #008ac2 133px 133px, #008ac2 134px 134px, #008ac3 135px 135px, #008ac3 136px 136px, #008ac3 137px 137px, #2E70D1 138px 138px; }
*/
/**
 * 1.0 Repeatable Patterns
 * -----------------------------------------------------------------------------
 */
html {
  overflow-x: hidden; }

.row {
  margin-right: -10px;
  margin-left: -10px; }



::selection {
  background: #58595b;
  color: #fff;
  text-shadow: none; }



.clear {
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0; }

a {
  color: #333333;
  text-decoration: none !important;
  outline: none !important; }

a:hover, a:active {
  color: #2E70D1;
  text-decoration: none; }

a:focus {
  outline: none; }

ol {
  margin: 0px;
  padding: 0; }

ul {
  margin: 0px;
  padding: 0; }

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0; }

p {
  margin: 0; }

.list-unstyled {
  padding-left: 0;
  list-style: none; }

.list-inline {
  padding-left: 0;
  list-style: none; }

.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px; }

.list-inline > li:first-child {
  padding-left: 0; }

h1, h2, h3, h4, h5, h6, .h1, .widget-title.style2, .h2, .h3, .h4, .kopa-portfolio-widget .widget-title, .widget-title.style4, .h5, .h6, .filters-options li, .filters-options2 li, .kopa-loadmore span {
  font-family: "Open Sans", sans-serif;
  color: #333333;
  font-weight: 700;
  display: block;
  margin: 0 0 15px; }

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .h1 a, .widget-title.style2 a, .h2 a, .h3 a, .h4 a, .kopa-portfolio-widget .widget-title a, .widget-title.style4 a, .h5 a, .h6 a, .filters-options li a, .filters-options2 li a, .kopa-loadmore span a {
  color: #333333; }

h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover, .h1 a:hover, .widget-title.style2 a:hover, .h2 a:hover, .h3 a:hover, .h4 a:hover, .kopa-portfolio-widget .widget-title a:hover, .widget-title.style4 a:hover, .h5 a:hover, .h6 a:hover, .filters-options li a:hover, .filters-options2 li a:hover, .kopa-loadmore span a:hover {
  color: #2E70D1; }

h1, .h1, .widget-title.style2 {
  font-size: 24px;
  line-height: 32px; }

h2, .h2 {
  font-size: 22px;
  line-height: 30px; }

h3, .h3 {
  font-size: 20px;
  line-height: 28px; }

h4, .h4, .kopa-portfolio-widget .widget-title, .widget-title.style4 {
  font-size: 18px;
  line-height: 26px; }

h5, .h5 {
  font-size: 16px;
  line-height: 24px; }

h6, .h6, .filters-options li, .filters-options2 li, .kopa-loadmore span {
  font-size: 14px;
  line-height: 22px; }

.e-accordion .row, .e-button .row, .e-tabs .row {
  margin-top: 35px; }

.element-wrap {
  margin-top: 60px; }

.element-title {
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 20px;
  color: #333333;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 25px; }

.e-heading p {
  margin-bottom: 15px; }

.e-heading p:last-child {
  margin-bottom: 0; }

/*----- blockquote -----*/
blockquote {
  background: url("/portal-theme/css/img/background/bq.png") right bottom no-repeat;
  color: #333333;
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding: 20px 20px 20px 25px;
  line-height: 24px;
  margin-bottom: 0;
  border: 1px solid #e8e8e8;
  position: relative; }

blockquote:before {
  content: '';
  width: 4px;
  height: 100%;
  background: #2E70D1;
  position: absolute;
  top: 0;
  left: 0; }

blockquote.style-2 {
  border: none;
  background: none; }

blockquote.style-2:before {
  content: '';
  width: 4px;
  height: 100%;
  background: #e8e8e8;
  position: absolute;
  top: 0;
  left: 0; }

.b-line {
  font-size: 16px;
  line-height: 22px;
  color: #888888;
  font-family: "Lato", sans-serif;
  margin-top: 5px; }

.b-line span:first-child {
  width: 20px;
  height: 1px;
  background: #888888;
  display: block;
  float: left;
  margin: 11px 12px 0 0; }

.element-wrap blockquote {
  margin-top: 30px; }

/*----- Text style -----*/
.txt-highlight {
  background: #2E70D1;
  color: #fff; }

.txt-highlight-2 {
  background: #333333;
  color: #fff; }

.txt-color {
  color: #333333; }

.txt-decoration {
  color: #888888;
  text-decoration: underline; }

.txt-decoration-2 {
  color: #2E70D1;
  text-decoration: underline; }

/*----- Column -----*/
.c-title {
  color: #333333;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 600; }

.e-column .element-title {
  margin-bottom: 0; }

/* ---------- menu nav --------- */
.ml-2 {
  margin-left: -185px !important; }

.ml-3 {
  margin-left: -380px !important; }

.ml-4 {
  margin-left: -575px !important; }

.ml-5 {
  margin-left: -770px !important; }

.ml-6 {
  margin-left: -965px !important; }

/* -------- end menu nav ------- */
/*----- Bootstrap collapse -----*/
.kopa-accordion-widget .widget-title.style3, .kopa-accordion-widget .widget-title.style5 {
  margin-bottom: 45px; }








.kopa-toggle-widget .panel-group {
  border: none; }

.kopa-toggle-widget .panel-group .panel {
  margin-top: 10px !important; }

.kopa-toggle-widget .panel-group .panel:first-child {
  margin-top: 0px !important; }

.kopa-toggle-widget .panel-group .panel .panel-heading {
  position: relative;
  border: none;
  background: #2E70D1;
  padding: 0; }





.kopa-toggle-widget .panel-group .panel .panel-body {
  padding: 15px 20px;
  border: 1px solid #e8e8e8 !important; }

/*----- Pricing-table -----*/
.pricing-table {
  margin-top: 25px; }

.column {
  text-align: center;
  position: relative;
  width: 100%; }

.column.active .title-row {
  background: #2E70D1;
  color: #fff; }

.column.active .title-row span {
  background: #f6f6f6; }

.column.active .pricing-row {
  background: #f6f6f6;
  border-bottom: 1px solid #e8e8e8; }

.column.active .pricing-row span {
  color: #2E70D1; }

.column.active .footer-row .pt-btn {
  background: #2E70D1;
  color: #fff; }

.column ul li {
  padding: 15px 55px;
  border: 1px solid #e8e8e8;
  border-top: none;
  color: #333333;
  font-size: 16px; }

.column ul li:first-child {
  border: none;
  padding: 45px 20px 15px;
  font-size: 24px; }

.column ul li.normal-row:first-child {
  border-top: none; }

.column ul li.title-row {
  line-height: 24px;
  background: #fff;
  color: #2E70D1;
  text-transform: uppercase; }

.column ul li.title-row span {
  width: 100%;
  height: 30px;
  background: #2E70D1;
  display: block;
  position: absolute;
  top: 0;
  left: 0; }

.column ul li.pricing-row {
  background: #2E70D1;
  font-size: 24px;
  border: none;
  padding: 35px 35px 60px;
  position: relative; }

.column ul li.pricing-row span {
  color: #fff; }

.column ul li.pricing-row span.h1, .column ul li.pricing-row span.widget-title.style2 {
  font-weight: 400;
  text-transform: capitalize; }

.column ul li.pricing-row span.pt-price {
  font-size: 55px;
  line-height: 55px;
  margin-top: 20px;
  display: block;
  font-weight: 700; }

.column ul li.pricing-row span.triggle {
  content: '';
  position: absolute;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 20px solid white;
  top: 0;
  left: 50%;
  margin-left: -25px;
  bottom: -1px; }

.column ul li.footer-row {
  padding: 25px 30px;
  line-height: 13px; }

.column ul li.footer-row .pt-btn {
  color: #2E70D1;
  line-height: 40px;
  padding: 10px 25px;
  border: 1px solid #2E70D1; }

.column ul li.footer-row .pt-btn:hover {
  background: #2E70D1;
  color: #fff; }

/*----- Tabs -----*/
.nav-tabs {
  background: none;
  margin-bottom: 0;
  border: 0; }

.nav-tabs li > a {
  margin-right: 2px;
  border: 1px solid #e8e8e8;
  text-transform: none;
  background: none;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #333333 !important;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  padding: 10px 30px;
  margin-bottom: 0px;
  border-bottom: 0;
  border-radius: 0;
  cursor: pointer !important;
  position: relative; }

.nav-tabs li > a:hover {
  color: #333333 !important;
  border-top: 2px solid #2E70D1;
  margin-bottom: -2px;
  border-bottom: 0;
  background: 0; }

.nav-tabs li.active > a, .nav-tabs li.active > a:hover, .nav-tabs li.active > a:focus {
  color: #333333 !important;
  cursor: default;
  border-top: 2px solid #2E70D1;
  margin-bottom: -2px;
  border-bottom: 0;
  background: 0; }

.tab-content {
  border: 1px solid #e8e8e8;
  padding: 0px;
  background: #fff; }

.kopa-tab-2-widget .nav-tabs {
  float: left; }

.kopa-tab-2-widget .nav-tabs li {
  float: none;
  display: block;
  margin-top: 3px; }

.kopa-tab-2-widget .nav-tabs li:first-child {
  margin: 0; }

.kopa-tab-2-widget .nav-tabs li > a {
  margin: 0;
  border: 1px solid #e8e8e8;
  text-align: left !important;
  border-right: 0; }

.kopa-tab-2-widget .nav-tabs li > a:hover {
  border: 1px solid #2E70D1;
  border-right: 0;
  background: #2E70D1;
  color: #fff !important; }

.kopa-tab-2-widget .nav-tabs li.active > a, .kopa-tab-2-widget .nav-tabs li.active > a:hover, .kopa-tab-2-widget .nav-tabs li.active > a:focus {
  border: 1px solid #2E70D1;
  border-right: 0;
  background: #2E70D1;
  color: #fff !important; }

.kopa-tab-2-widget .nav-tabs li.active > a:hover {
  margin-bottom: 0px; }

.kopa-tab-2-widget .tab-content {
  overflow: hidden; }

/*----- dropcap -----*/
.kopa-dropcap {
  color: #fff;
  background: #2E70D1;
  display: inline-block;
  zoom: 1;
  float: left;
  font-size: 36px;
  font-weight: 600;
  line-height: 41px;
  margin: 5px 10px 0 0;
  text-align: center;
  padding: 6px 12px; }

.kopa-dropcap.dc2 {
  color: #333333;
  background: none;
  line-height: 36px;
  margin: 5px 10px 0 0;
  text-align: center;
  padding: 0px 6px; }

.kopa-dropcap.dc3 {
  background: #888888; }

/*----- Divider -----*/
.kopa-divider {
  margin: 20px 0;
  height: 1px; }

.divider-1 {
  border-top: 1px solid #e8e8e8; }

.divider-2 {
  border-top: 2px dotted #e8e8e8;
  height: 2px; }

.divider-3 {
  border-top: 2px dashed #e8e8e8;
  height: 2px; }

.divider-4 {
  height: 12px;
  border-top: 1px double #e8e8e8;
  border-bottom: 1px double #e8e8e8; }

/*----- Progress bar -----*/
.progress {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  box-shadow: 0 0 0 0 transparent;
  -ms-box-shadow: 0 0 0 0 transparent;
  -moz-box-shadow: 0 0 0 0 transparent;
  -webkit-box-shadow: 0 0 0 0 transparent;
  background: transparent;
  border-width: 1px;
  border-style: solid; }

.progress .progress-bar {
  box-shadow: 0 0 0 0 transparent;
  -ms-box-shadow: 0 0 0 0 transparent;
  -moz-box-shadow: 0 0 0 0 transparent;
  -webkit-box-shadow: 0 0 0 0 transparent; }

.progress .progress-bar-danger {
  background: #2E70D1; }

.progress.bar-success {
  border-color: #5CB85C; }

.progress.bar-info {
  border-color: #5BC0DE; }

.progress.bar-warning {
  border-color: #F0AD4E; }

.progress.bar-danger {
  border-color: #2E70D1; }

/*----- Buttons -----*/
/*
.kopa-button {
  float: left;
  margin-right: 15px;
  margin-bottom: 15px; }

.small-button {
  margin-top: 26px; }

.medium-button {
  margin-top: 16px; }

.kopa-button {
  padding: 7px 25px;
  color: #fff;
  background: #2E70D1;
  font-size: 15px; }

.small-button {
  padding: 7px 25px; }

.medium-button {
  padding: 12px 30px; }

.big-button {
  padding: 20px 40px; }

.color-button, .border-button:hover {
  color: #fff;
  background: #2E70D1;
  border: 1px solid #2E70D1; }

.border-button, .color-button:hover {
  background: #fff;
  border: 1px solid #2E70D1;
  color: #2E70D1; }

.span-button {
  background: #fff;
  border: 2px solid #2E70D1;
  padding: 1px; }

.span-button span {
  background: #2E70D1;
  display: block; }

.span-button.small-button > span {
  padding: 5px 24px; }

.span-button.medium-button > span {
  padding: 10px 27px; }

.span-button.big-button > span {
  padding: 18px 37px; }

.span-button:hover span {
  background: #fff; }
*/
/*----- Alert Box -----*/
.kopa-alert {
  margin-top: 20px; }

.kopa-alert {
  padding: 10px 35px 10px 17px;
  color: #fff;
  position: relative;
  border: none; }

.kopa-alert .close {
  opacity: 0.8;
  top: 0px;
  right: -18px;
  outline: none; }

.kopa-alert.alert-warning {
  background: #fd9638; }

.kopa-alert.alert-info {
  background: #4fc7ed; }

.kopa-alert.alert-blue {
  background: #2E70D1; }

.kopa-alert.alert-success {
  background: #35d05a; }

.kopa-alert.alert-danger {
  background: #f25656; }

/*----- Social Links -----*/
.social-links li {
  float: left;
  margin: 0 0 0 30px;
  list-style: none;
  font-size: 18px; }

.social-links li:first-child {
  margin: 0; }

.social-links li a {
  color: #b7b7b7; }

.social-links li a:hover, .kopa-home-parallax .social-links li a:hover {
  /*color: #2E70D1; */
  /* animaciones solicitadas por Luis */
  /*text-shadow:0px 0px 2px rgba(255, 255, 255, 255 .50);*/
  color: #FC8D12;
  /*text-shadow: 0 1px 1px rgba(0,0,0, 0.6);*/
  /*
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
  */
  transform: scale(2); }

.search-box .search-form {
  position: relative;
  width: 210px; }

.search-box .search-form .search-text {
  width: 100%;
  border: none;
  height: 36px;
  padding: 5px 36px 5px 15px;
  color: #848484;
  line-height: 26px;
  background: #f6f6f6;
  -webkit-box-shadow: inset 0px 2px 1px 0px rgba(235, 235, 235, 0.7);
  -moz-box-shadow: inset 0px 2px 1px 0px rgba(235, 235, 235, 0.7);
  box-shadow: inset 0px 2px 1px 0px rgba(235, 235, 235, 0.7); }

.search-box .search-form .search-submit {
  position: absolute !important;
  right: 10px !important;
  top: 6px !important;
  border: none !important;
  background: none !important;
  font-size: 18px !important;
  padding: 0 !important;
  color: #afb2b7 !important; }

.search-box .search-form .search-submit:hover {
  color: #2E70D1 !important; }

/**
 * 2.0 Basic structure
 * -----------------------------------------------------------------------------
 */


.mb-10 {
  margin-bottom: 10px; }

.mb-20 {
  margin-bottom: 20px; }

.mb-30 {
  margin-bottom: 30px; }

.mb-60 {
  margin-bottom: 60px; }

.wrapper, .wrapper-2 {
  width: 1150px;
  margin: 0 auto;
  position: relative; }

#main-content {
  position: relative; }

.kopa-home-1 #main-content, .kopa-home-2 #main-content {
  margin-top: -260px; }

.kopa-elements-page #main-content {
  margin-bottom: 60px; }

body.kopa-elements-page {
  background: #fff; }

#bottom-sidebar {
  background: #28292d;
  padding: 55px 0 0; }

.entry-item, .service-item, .kopa-testimonial-widget .item {
  background: #fff; }

.kopa-area .entry-item, .kopa-area .service-item, .kopa-area .kopa-testimonial-widget .item {
  background: none; }

/**
 * 3.0 Header
 * -----------------------------------------------------------------------------
 */
/*   Preloader
--------------------------------------------------------------------------------*/
#preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #222;
  z-index: 999999999999;
  text-align: center; }

#preloader .inner {
  position: absolute;
  width: 150px;
  height: 266px;
  overflow: hidden;
  margin: auto;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 9;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%); }

#preloader .inner .image {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden; }

#preloader .inner .image > img {
  max-width: 50%;
  margin-top: 110px; }

#preloader .inner .image .img2 {
  position: absolute;
  top: 30px;
  left: -27px;
  z-index: -1;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-animation: preloader-ef 10s ease infinite;
  -moz-animation: preloader-ef 10s ease infinite;
  animation: preloader-ef 10s ease infinite; }

@-webkit-keyframes preloader-ef {
  0% {
    top: 30px;
    left: -27px; }

  10% {
    top: 50px;
    left: 27px; }

  20% {
    top: -40px;
    left: -15px; }

  30% {
    top: 40px;
    left: -20px;
    -webkit-transform: scale(1.3); }

  40% {
    top: 60px;
    left: 0px; }

  50% {
    top: 30px;
    left: -27px; }

  60% {
    top: 45px;
    left: 0px; }

  70% {
    top: -20px;
    left: 10px; }

  80% {
    top: 0px;
    left: -22px; }

  90% {
    top: 10px;
    left: 20px;
    -webkit-transform: scale(1.3); }

  100% {
    top: 30px;
    left: -27px; } }

@-moz-keyframes preloader-ef {
  0% {
    top: 30px;
    left: -27px; }

  10% {
    top: 50px;
    left: 27px; }

  20% {
    top: -40px;
    left: -15px; }

  30% {
    top: 40px;
    left: -20px;
    -moz-transform: scale(1.3); }

  40% {
    top: 60px;
    left: 0px; }

  50% {
    top: 30px;
    left: -27px; }

  60% {
    top: 45px;
    left: 0px; }

  70% {
    top: -20px;
    left: 10px; }

  80% {
    top: 0px;
    left: -22px; }

  90% {
    top: 10px;
    left: 20px;
    -moz-transform: scale(1.3); }

  100% {
    top: 30px;
    left: -27px; } }

@keyframes preloader-ef {
  0% {
    top: 30px;
    left: -27px; }

  10% {
    top: 50px;
    left: 27px; }

  20% {
    top: -40px;
    left: -15px; }

  30% {
    top: 40px;
    left: -20px;
    transform: scale(1.3); }

  40% {
    top: 60px;
    left: 0px; }

  50% {
    top: 30px;
    left: -27px; }

  60% {
    top: 45px;
    left: 0px; }

  70% {
    top: -20px;
    left: 10px; }

  80% {
    top: 0px;
    left: -22px; }

  90% {
    top: 10px;
    left: 20px;
    transform: scale(1.3); }

  100% {
    top: 30px;
    left: -27px; } }

#preloader .circle-ef {
  width: 130px;
  height: 130px;
  position: absolute;
  border: 2px solid #303030;
  border-left-color: #2E70D1;
  border-radius: 50%;
  margin: auto;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 23px;
  z-index: 99;
  -webkit-animation: circle-ef 1s linear infinite;
  -moz-animation: circle-ef 1s linear infinite;
  animation: circle-ef 1s linear infinite; }

@-webkit-keyframes circle-ef {
  100% {
    -webkit-transform: rotate(360deg); } }

@-moz-keyframes circle-ef {
  100% {
    -moz-transform: rotate(360deg); } }

@keyframes circle-ef {
  100% {
    transform: rotate(360deg); } }

#preloader .circle-ef:after {
  content: '';
  display: block;
  position: absolute; }

.preloader-ef {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -ms-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear; }

#preloader.preloader-ef .inner .img2,
#preloader.preloader-ef .inner .circle-ef {
  display: none;
  -webkit-animation: none;
  -moz-animation: none;
  animation: none; }

/*
Header top
-----------------------
*/
.kopa-header-top {
  background: #fff;
  height: 48px; }

.kopa-header-top .wrapper .hotline-box {
  /*display:none;*/
  padding: 13px 45px 13px 0;
  background: #f1f1f1;
  position: relative;
  border-right: 3px solid #d1d1d1; }

.kopa-header-top .wrapper .hotline-box h6 {
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase; }

.kopa-header-top .wrapper .hotline-box .triangle-wrapper {
  position: absolute;
  top: 3px;
  right: -28px;
  border-top: 46px solid #d1d1d1;
  border-bottom: 0px solid transparent;
  border-right: 25px solid transparent;
  border-left: 0px solid transparent;
  display: block;
  height: 0;
  width: 0;
  transition: border 0.3s ease-in-out 0s;
  -moz-transition: border 0.3s ease-in-out 0s;
  -webkit-transition: border 0.3s ease-in-out 0s; }

.kopa-header-top .wrapper .hotline-box .triangle {
  position: absolute;
  top: 0px;
  right: -25px;
  border-top: 46px solid #f1f1f1;
  border-bottom: 0px solid transparent;
  border-right: 25px solid transparent;
  border-left: 0px solid transparent;
  display: block;
  height: 0;
  width: 0;
  transition: border 0.3s ease-in-out 0s;
  -moz-transition: border 0.3s ease-in-out 0s;
  -webkit-transition: border 0.3s ease-in-out 0s; }

.kopa-header-top .wrapper .hotline-box .kopa-border-bottom {
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: -4px;
  z-index: 1;
  left: 0;
  background: rgba(0, 0, 0, 0.25); }

.kopa-header-top .wrapper .left-bg-color {
  position: absolute;
  top: 0;
  right: 100%;
  background: #f1f1f1;
  width: 100%;
  height: 48px; }

.kopa-header-top .wrapper .left-bg-color .kopa-border-bottom {
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: -4px;
  z-index: 1;
  left: 0;
  background: rgba(0, 0, 0, 0.25); }

.kopa-header-top .wrapper .ss-box {
  padding: 6px 0;
  height: 48px; }

.kopa-header-top .wrapper .ss-box .search-box {
  margin-left: 20px; }

.kopa-header-top .wrapper .ss-box .social-links {
  margin: 8px 0 0; }

.kopa-header-top-2 {
  background: #fff;
  padding: 10px 0;
  display: none; }

/*
Header bottom
-----------------------
*/
.kopa-header-bottom {
  position: relative;
  background: #FC8D12; }

.kopa-header-bottom .wrapper {
  height: 100%; }

.kopa-header-bottom .wrapper .left-color-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background: #fff; }

.kopa-header-bottom .wrapper .left-color-bg .left-color-bg-outer {
  background: #fff;
  position: absolute;
  top: 0;
  width: 500%;
  height: 100%;
  right: 100%; }

.kopa-header-bottom .wrapper .left-color-bg .triangle {
  position: absolute;
  top: 0px;
  right: -50px;
  border-top: 87px solid #fff;
  border-bottom: 0px solid transparent;
  border-right: 50px solid transparent;
  border-left: 0px solid transparent;
  display: block;
  height: 0;
  width: 0;
  transition: border 0.3s ease-in-out 0s;
  -moz-transition: border 0.3s ease-in-out 0s;
  -webkit-transition: border 0.3s ease-in-out 0s; }

.kopa-header-bottom .wrapper .logo-box {
  position: relative;
  margin-top: 10px;
  transition: all 0.9s;
  -ms-transition: all 0.9s;
  -webkit-transition: all 0.9s;
  -moz-transition: all 0.9s; }

.kopa-header-bottom.fixed {
  position: fixed;
  top: 0px;
  background: #FC8D12 !important;
  width: 100%;
  z-index: 100;
  height: 70px !important;
  opacity: 0.95;
  filter: Alpha(Opacity=95); }

.kopa-header-bottom.fixed .wrapper .left-color-bg .triangle {
  border-top-width: 70px;
  transition: all 0s;
  -ms-transition: all 0s;
  -webkit-transition: all 0s;
  -moz-transition: all 0s; }

.kopa-header-bottom.fixed .logo-box {
  margin-top: 13px; }

.kopa-header-bottom.fixed .logo-box img {
  height: 45px !important;
  max-height: 45px !important; }

.kopa-header-bottom.fixed .main-menu > li {
  padding: 27px 18px !important;
  height: 70px !important;
  margin-top: 0px; }

.kopa-header-bottom.fixed .main-menu > li > ul {
  top: 70px; }

.kopa-header-bottom.fixed .main-nav-mobile {
  margin-top: 25px !important; }

.kopa-home-parallax .kopa-header-bottom.fixed .main-nav:before {
  border-top-width: 70px !important;
  transition: all 0s;
  -ms-transition: all 0s;
  -webkit-transition: all 0s;
  -moz-transition: all 0s; }

.bg-feature {
  height: 260px;
  background: #ef5282; }

.bg-feature span {
  width: 15%;
  height: 100%;
  display: block;
  background: #2E70D1; }

.kopa-home-1 .home-slider-widget, .kopa-home-1 .home-slider-2-widget, .kopa-home-1 .kopa-home-slider-4-widget, .kopa-home-2 .home-slider-widget, .kopa-home-2 .home-slider-2-widget, .kopa-home-2 .kopa-home-slider-4-widget {
  margin-top: -8px; }

.bg-hb {
  background: url("/portal-theme/css/img/background/bg/1.png");
  background: rgba(255, 255, 255, 0.3);
  height: 8px;
  margin-top: -8px;
  position: relative; }

/**
 * 4.0 Navigation
 * -----------------------------------------------------------------------------
 */
.main-menu {
  margin-right: -18px; }

.main-menu > li {
  position: relative;
  /*z-index: 99999999;*/
  float: left;
  padding: 30px 18px 41px;
  /* border:1px solid #333; */
  /* height: 106px; */
  height: 86px;
  /*margin-top: -30px;*/ }

.kopa-home-parallax .main-menu > li {
  /*margin-top: -23px;*/ }

.main-menu > li > a {
  text-transform: uppercase;
  color: #fff;
  /*opacity: 0.8;*/
  filter: Alpha(Opacity=80);
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 11px;
  padding-right: 0 !important;
  position: relative; }

.main-menu > li > a:before {
  background: #fff;
  height: 1px;
  overflow: hidden;
  position: absolute;
  top: -5px;
  right: 50%;
  bottom: auto;
  left: 50%;
  content: ''; }

.main-menu > li > a:after {
  background: #fff;
  height: 1px !important;
  overflow: hidden;
  position: absolute;
  top: -5px !important;
  right: 50% !important;
  bottom: auto;
  left: 50%;
  content: '';
  border: none !important;
  margin: 0 !important;
  width: inherit !important; }

.main-menu > li ul {
  background: #fff;
  width: 200px;
  display: none;
  position: absolute;
  left: 0;
  top: 86px;
  padding: 12px 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  z-index: 999999; }

.main-menu > li ul li {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e8e8e8;
  position: relative; }

.main-menu > li ul ul {
  top: 0;
  left: 115%; }

.main-menu > li:hover > a, .main-menu > li.current-menu-item > a {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.main-menu > li:hover > a:before, .main-menu > li.current-menu-item > a:before {
  left: 0; }

.main-menu > li:hover > a:after, .main-menu > li.current-menu-item > a:after {
  right: 0 !important; }

.main-menu .fixed-sd {
  text-align: center;
  padding-top: 22px;
  margin-bottom: -25px; }

.kopa-header-bottom.fixed .main-menu > li.fixed-sd {
  padding-top: 14px !important;
  margin-top: 0px; }

/*** menu-mobile ***/
.main-nav-mobile {
  position: relative;
  float: right;
  display: none;
  margin-top: 40px; }

.main-nav-mobile .pull {
  font-size: 25px;
  color: #fff;
  z-index: 99;
  position: relative;
  display: block;
  cursor: pointer; }

.main-nav-mobile .main-menu-mobile {
  position: absolute;
  top: 35px;
  right: 0;
  width: 220px;
  z-index: 99999999;
  display: none;
  background: #fff;
  padding: 0 15px; }

.main-nav-mobile .main-menu-mobile > li {
  border-top: 1px solid #e8e8e8;
  position: relative;
  width: 100%; }

.main-nav-mobile .main-menu-mobile > li:first-child {
  border: 0; }

.main-nav-mobile .main-menu-mobile > li > a {
  color: #333333;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  display: block;
  padding: 10px 0; }

.main-nav-mobile .main-menu-mobile > li > a:hover {
  color: #2E70D1; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li {
  border-top: 1px solid #e8e8e8; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li a {
  padding: 10px 15px;
  color: #888888;
  text-transform: none;
  display: block; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li a:hover {
  color: #2E70D1; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li span {
  display: none; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li .sub-menu {
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  height: auto !important;
  width: 100%; }

.main-nav-mobile .main-menu-mobile > li .sub-menu li:hover {
  background: #f6f6f6; }

.main-nav-mobile .main-menu-mobile > li span {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 15px; }

.main-nav-mobile .main-menu-mobile > li span:after {
  content: '\f107'; }

.main-nav-mobile .main-menu-mobile > li.open span:after {
  content: '\f106'; }

#footer-nav #footer-menu {
  margin-top: 5px; }

#footer-nav #footer-menu li {
  float: left;
  margin: 0;
  list-style: none;
  border-left: 1px solid #5e5e5e;
  padding: 0 10px;
  line-height: 1; }

#footer-nav #footer-menu li:first-child {
  border-left: none;
  padding-left: 0; }

#footer-nav #footer-menu li a {
  line-height: 1; }

/**
 * 5.0 Widget
 * -----------------------------------------------------------------------------
 */
/*-- widget default --*/
.widget_categories,
.widget_recent_entries,
.widget_archive,
.widget_meta,
.widget_nav_menu,
.widget_pages,
.widget_recent_comments,
.widget_rss {
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8; }

.widget_categories > ul > li,
.widget_recent_entries > div > ul > li,
.widget_recent_entries > ul > li,
.widget_archive > ul > li,
.widget_meta > ul > li,
.widget_nav_menu > ul > li,
.widget_pages > ul > li,
.widget_recent_comments > ul > li,
.widget_rss > ul > li {
  color: #333333;
  padding-bottom: 10px; }

.widget_categories > ul > li:before,
.widget_recent_entries > div > ul > li:before,
.widget_recent_entries > ul > li:before,
.widget_archive > ul > li:before,
.widget_meta > ul > li:before,
.widget_nav_menu > ul > li:before,
.widget_pages > ul > li:before,
.widget_recent_comments > ul > li:before,
.widget_rss > ul > li:before {
  content: "\f105";
  margin-right: 10px;
  font-size: 16px;
  color: #333333;
  float: left;
  line-height: 22px; }

.widget_categories > ul > li:hover:before,
.widget_recent_entries > div > ul > li:hover:before,
.widget_recent_entries > ul > li:hover:before,
.widget_archive > ul > li:hover:before,
.widget_meta > ul > li:hover:before,
.widget_nav_menu > ul > li:hover:before,
.widget_pages > ul > li:hover:before,
.widget_recent_comments > ul > li:hover:before,
.widget_rss > ul > li:hover:before {
  color: #2E70D1; }

.widget_categories > ul > li .sub-menu, .widget_categories > ul > li .children,
.widget_recent_entries > div > ul > li .sub-menu,
.widget_recent_entries > div > ul > li .children,
.widget_recent_entries > ul > li .sub-menu,
.widget_recent_entries > ul > li .children,
.widget_archive > ul > li .sub-menu,
.widget_archive > ul > li .children,
.widget_meta > ul > li .sub-menu,
.widget_meta > ul > li .children,
.widget_nav_menu > ul > li .sub-menu,
.widget_nav_menu > ul > li .children,
.widget_pages > ul > li .sub-menu,
.widget_pages > ul > li .children,
.widget_recent_comments > ul > li .sub-menu,
.widget_recent_comments > ul > li .children,
.widget_rss > ul > li .sub-menu,
.widget_rss > ul > li .children {
  margin-left: 15px; }

.widget_rss .widget-title .rsswidget {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
  float: none; }

.widget_rss > ul > li a {
  color: #2E70D1; }

.textwidget p {
  font-size: 14px; }

.textwidget p strong {
  font-weight: normal;
  margin-bottom: 20px;
  display: inline-block; }

.textwidget img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px; }

.wp-caption img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px; }

.post-date {
  margin-left: 3px;
  color: #2E70D1;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: normal;
  line-height: 11px; }

.wp-playlist {
  margin: 0 !important; }

.tagcloud {
  margin: -4px -2px; }

.tagcloud a {
  padding: 5px 15px;
  margin: 4px 2px;
  display: inline-block;
  border: 1px solid #d0d0d0;
  font-size: 14px;
  color: #333333; }

.tagcloud a:hover {
  border: 1px solid #333333;
  /*font-weight: 700;*/
  color: #333333; }

.widget_categories select, .widget_archive select, .widget_nav_menu select,
.widget_pages select, .widget_recent_comments select, .widget_rss select, .textwidget select {
  font-size: 13px;
  color: #888888;
  width: 100%;
  height: 52px;
  padding: 10px 20px;
  border: 1px solid #e8e8e8;
  outline: none;
  position: relative; }

/*CALENDAR*/
.widget_calendar table {
  line-height: 2;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: -5px; }

.widget_calendar caption {
  font-weight: 600;
  border-bottom: 1px solid #e8e8e8;
  color: #888888;
  font-size: 16px;
  padding-bottom: 15px;
  line-height: 18px; }

.widget_calendar tfoot {
  border-top: 1px solid #e8e8e8;
  font-weight: 700; }

.widget_calendar tfoot td {
  padding-top: 15px; }

.widget_calendar thead th {
  width: 14.285%;
  font-size: 16px;
  color: #2E70D1; }

.widget_calendar tbody td, .widget_calendar thead th {
  text-align: center;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #e8e8e8;
  color: #888888;
  font-size: 14px;
  margin-bottom: 15px;
  padding-bottom: 12px;
  padding-top: 15px;
  line-height: 18px; }

.widget_calendar tbody a {
  color: #2E70D1;
  display: block; }

.widget_calendar #prev {
  padding-left: 5px; }

.widget_calendar #next {
  padding-right: 5px;
  text-align: right; }

/*SEARCH*/
.widget_search form.search-form {
  position: relative; }

.widget_search form.search-form .search-text {
  width: 100%;
  height: 32px;
  padding: 4px 32px 4px 8px;
  border: 1px solid #e8e8e8; }

.widget_search form.search-form input {
  border: none;
  font-size: 13px;
  color: #888888;
  width: 100%;
  height: 52px;
  padding: 10px 71px 10px 20px;
  border: 1px solid #e8e8e8; }

.widget_search form.search-form .search-submit {
  font-size: 17px;
  display: block;
  width: 50px;
  height: 52px;
  line-height: 34px;
  color: #888888;
  padding: 10px 17px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-left: 1px solid #e8e8e8;
  margin: 0;
  background: none;
  outline: none; }

/*** default widget bottom ***/
#bottom-sidebar .widget_calendar {
  border-color: #888888;
  color: #fff;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

#bottom-sidebar .widget_calendar caption, #bottom-sidebar .widget_calendar tfoot, #bottom-sidebar .widget_calendar thead th, #bottom-sidebar .widget_calendar tfoot td a, #bottom-sidebar .widget_calendar tbody td {
  border-color: #888888;
  color: #fff;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

#bottom-sidebar .widget_categories > ul > li,
#bottom-sidebar .widget_recent_entries > div > ul > li,
#bottom-sidebar .widget_recent_entries > ul > li,
#bottom-sidebar .widget_archive > ul > li,
#bottom-sidebar .widget_meta > ul > li,
#bottom-sidebar .widget_nav_menu > ul > li,
#bottom-sidebar .widget_pages > ul > li,
#bottom-sidebar .widget_recent_comments > ul > li,
#bottom-sidebar .widget_rss > ul > li {
  border-color: #888888;
  color: #fff;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

#bottom-sidebar .widget_rss ul li, #bottom-sidebar .textwidget, #bottom-sidebar .textwidget p strong, #bottom-sidebar .textwidget > ul > li a {
  border-color: #888888;
  color: #fff;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

#bottom-sidebar .tagcloud a {
  border-color: #888888;
  color: #fff;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

.widget > ul > li {
  list-style: none; }

.widget-title {
  text-transform: uppercase; }

#main-content .widget {
  margin-bottom: 20px; }

/*
Home slider widget
----------------------------------
*/
.loading {
  background: url("/portal-theme/css/img/icons/gif-load.gif") no-repeat scroll center center white;
  min-height: 520px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999; }

.home-slider-widget, .home-slider-2-widget, .kopa-home-slider-4-widget {
  background: url("/portal-theme/css/img/background/bg/1.png");
  background: rgba(255, 255, 255, 0.3);
  margin: 0 -8px -8px;
  padding: 8px;
  position: relative; }

.home-slider-widget .kopa-home-slider .entry-item, .home-slider-2-widget .kopa-home-slider .entry-item, .kopa-home-slider-4-widget .kopa-home-slider .entry-item {
  position: relative; }

.home-slider-widget .kopa-home-slider .entry-item .slider-caption, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption, .kopa-home-slider-4-widget .kopa-home-slider .entry-item .slider-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  background: url("/portal-theme/css/img/background/bg/4.png");
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 15px 115px 17px 20px; }

.home-slider-widget .kopa-home-slider .entry-item .slider-caption h2, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption h2, .kopa-home-slider-4-widget .kopa-home-slider .entry-item .slider-caption h2 {
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 400; }

.home-slider-widget .kopa-home-slider .entry-item .slider-caption h2 a, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption h2 a, .kopa-home-slider-4-widget .kopa-home-slider .entry-item .slider-caption h2 a {
  color: #cfcfcf; }

.home-slider-widget .kopa-home-slider .entry-item .slider-caption h2 a:hover, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption h2 a:hover, .kopa-home-slider-4-widget .kopa-home-slider .entry-item .slider-caption h2 a:hover {
  color: #2E70D1; }

.home-slider-widget .kopa-home-slider .flex-direction-nav, .home-slider-2-widget .kopa-home-slider .flex-direction-nav, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav {
  z-index: 1;
  position: absolute;
  bottom: 16px;
  right: 16px; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li {
  float: left;
  margin: 0 0 0 3px;
  list-style: none;
  width: 47px;
  height: 47px;
  background: url("/portal-theme/css/img/background/bg/2.png");
  background: rgba(0, 139, 196, 0.5);
  line-height: 44px; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li:first-child, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li:first-child, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li:first-child {
  margin: 0; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li:hover, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li:hover, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li:hover {
  background: #2E70D1; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li a, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li a, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li a {
  display: block;
  text-align: center;
  color: #fff;
  font-size: 26px; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li a:before, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li a:before, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li a:before {
  font-family: 'FontAwesome'; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li .flex-prev:before, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li .flex-prev:before, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li .flex-prev:before {
  content: "\f104"; }

.home-slider-widget .kopa-home-slider .flex-direction-nav li .flex-next:before, .home-slider-2-widget .kopa-home-slider .flex-direction-nav li .flex-next:before, .kopa-home-slider-4-widget .kopa-home-slider .flex-direction-nav li .flex-next:before {
  content: "\f105"; }

.home-slider-widget .kopa-home-slider .slides-info, .home-slider-2-widget .kopa-home-slider .slides-info, .kopa-home-slider-4-widget .kopa-home-slider .slides-info {
  position: absolute;
  bottom: 30px;
  right: 140px;
  color: #fff;
  z-index: 1; }

/*--- owl-button ---*/
.owl-theme .owl-controls {
  margin: 0; }

.owl-theme .owl-controls .owl-buttons div {
  color: #fff;
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  border-radius: 0;
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  opacity: 1;
  filter: Alpha(Opacity=100);
  text-align: center;
  position: absolute;
  top: 50%;
  width: 57px;
  height: 57px;
  line-height: 57px;
  font-size: 35px;
  margin-top: -28.5px;
  margin-left: -28.5px;
  margin-left: 0; }

.owl-theme .owl-controls .owl-buttons div:hover {
  background: #2E70D1; }

.owl-theme .owl-controls .owl-buttons div.owl-prev {
  left: 0;
  padding-right: 5px; }

.owl-theme .owl-controls .owl-buttons div.owl-next {
  right: 0;
  padding-left: 5px; }

/*
Home slider-2 widget
----------------------------------
*/
.home-slider-2-widget .entry-item {
  position: relative; }

.home-slider-2-widget .entry-item .entry-content {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px; }

.home-slider-2-widget .entry-item .entry-content .entry-title {
  padding: 12px 25px 12px 65px;
  background: #2E70D1;
  display: inline-block;
  margin: 0;
  font-weight: 600; }

.home-slider-2-widget .entry-item .entry-content .entry-title > a {
  color: #fff; }

.home-slider-2-widget .entry-item .entry-content > p {
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  line-height: 24px;
  padding: 15px 20px; }

.home-slider-2-widget .owl-theme .owl-controls {
  position: absolute;
  left: 20px;
  bottom: 98px;
  width: 50px;
  height: 50px;
  border: 5px solid #2E70D1;
  background: #fff;
  box-shadow: 0px 1px 10px #045678; }

.home-slider-2-widget .owl-theme .owl-controls:before {
  content: "";
  width: 1px;
  height: 20px;
  background: #2E70D1;
  opacity: 0.6;
  position: absolute;
  left: 50%;
  top: 10px; }

.home-slider-2-widget .owl-theme .owl-controls .owl-buttons div {
  position: inherit;
  background: none;
  width: 20px;
  height: 40px;
  margin: 0;
  padding: 0 !important;
  font-size: 25px;
  line-height: 42px;
  color: #2E70D1; }

.home-slider-2-widget .owl-theme .owl-controls .owl-buttons div:hover {
  color: #2E70D1; }

.home-slider-2-widget .owl-theme .owl-controls .owl-buttons div.owl-prev {
  left: 0;
  padding-right: 5px; }

.home-slider-2-widget .owl-theme .owl-controls .owl-buttons div.owl-next {
  right: 0;
  padding-left: 5px; }

/*
Kopa article list widget
----------------------------------
*/
.article-list-0 ul {
  margin: 0 -10px 0; }

.article-list-0 ul li {
  float: left;
  margin: 0;
  list-style: none; }

.article-list-0 ul li .entry-item {
  border-bottom: 2px solid #e8e8e8; }

.article-list-0 ul li .entry-item .entry-thumb {
  float: left;
  width: 96%; }

.article-list-0 ul li .entry-item .entry-thumb img {
  width: 100%;
  padding-right: 4px; }

.article-list-0 ul li .entry-item .entry-date {
  color: #fff; }

.article-list-0 ul li .entry-item .entry-content {
  overflow: hidden;
  padding-left: 20px; }

.article-list-0 ul li .entry-item .entry-content header {
  background: #2E70D1;
  margin-left: -20px;
  padding-left: 20px;
  height: 30px;
  margin-bottom: 15px; }

.article-list-0 ul li .entry-item .entry-content header .entry-date {
  line-height: 30px; }

.article-list-0 ul li .entry-item .entry-content .entry-title {
  text-transform: uppercase;
  position: relative;
  padding-bottom: 10px; }

.article-list-0 ul li .entry-item .entry-content .entry-title span {
  width: 33px;
  height: 2px;
  background: #2E70D1;
  position: absolute;
  bottom: 0;
  left: 0; }

.article-list-0 ul li .entry-item .entry-content > p {
  margin-bottom: 10px; }

/*
Kopa service widget
----------------------------------
*/
.kopa-service-widget .service-item {
  border-bottom: 2px solid #e8e8e8;
  padding: 20px 20px; }

.kopa-service-widget .service-item header {
  margin-bottom: 15px; }

.kopa-service-widget .service-item header i {
  font-size: 34px;
  margin-right: 20px; }

.kopa-service-widget .service-item header .service-title {
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  line-height: 34px;
  margin: 0; }

/*
Kopa testimonial widget
----------------------------------
*/
.kopa-testimonial-widget {
  position: relative;
  border: 5px solid #e8e8e8; }

.kopa-testimonial-widget .widget-title {
  margin: 0;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: #2E70D1;
  width: 100%;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 25px;
  color: #fff;
  padding: 10px 15px;
  text-transform: uppercase;
  z-index: 9; }

.kopa-testimonial-widget .item {
  padding: 15px 20px 65px;
  font-style: italic; }

.kopa-testimonial-widget .item p {
  margin-bottom: 15px; }

.kopa-testimonial-widget .item footer {
  font-style: normal; }

.kopa-testimonial-widget .item footer a {
  color: #2E70D1;
  font-weight: 700; }

.kopa-testimonial-widget .owl-controls {
  margin: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10; }

.kopa-testimonial-widget .owl-controls .owl-buttons {
  height: 45px; }

.kopa-testimonial-widget .owl-controls .owl-buttons div {
  margin: 0;
  opacity: 1;
  filter: Alpha(Opacity=100);
  background: #ef5282;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  height: 45px;
  width: 40px;
  color: #fff;
  padding: 0;
  text-align: center;
  line-height: 45px;
  font-size: 24px;
  position: inherit;
  padding: 0 !important; }

.kopa-testimonial-widget .owl-controls .owl-buttons div:before {
  font-family: 'FontAwesome'; }

.kopa-testimonial-widget .owl-controls .owl-buttons div:hover {
  background: #ef5282; }

.kopa-testimonial-widget .owl-controls .owl-buttons .owl-prev:before {
  content: "\f104"; }

.kopa-testimonial-widget .owl-controls .owl-buttons .owl-next:before {
  content: "\f105"; }

.owl-theme .owl-controls .owl-page span {
  width: 10px;
  height: 10px;
  margin: 5px 5px 0;
  opacity: 1;
  filter: Alpha(Opacity=100);
  background: #fff;
  border: 1px solid #2E70D1; }

.owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls .owl-page:hover span {
  background: #2E70D1; }

/*
Kopa tagline
----------------------------------
*/
.kopa-tagline-widget {
  margin: 0 0 20px !important; }

.kopa-tagline-widget .tagline-left {
  position: relative;
  width: 77.77778%;
  background: #2E70D1;
  height: 75px;
  padding: 13px 20px;
  margin: 0 10px 0 0; }

.kopa-tagline-widget .tagline-left h6 {
  color: #fff;
  margin: 0;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase; }

.kopa-tagline-widget .tagline-left p {
  margin: 0;
  color: #C2D9FF;
  max-height: 22px;
  overflow: hidden; }

.kopa-tagline-widget .tagline-left .triangle {
  position: absolute;
  top: 0px;
  right: -25px;
  border-top: 38px solid transparent;
  border-bottom: 37px solid transparent;
  border-right: 0px solid transparent;
  border-left: 25px solid #2E70D1;
  display: block;
  height: 0;
  width: 0;
  z-index: 1;
  transition: border 0.3s ease-in-out 0s;
  -moz-transition: border 0.3s ease-in-out 0s;
  -webkit-transition: border 0.3s ease-in-out 0s; }

.kopa-tagline-widget .tagline-right {
  width: 21.05263%;
  background: #ef5282;
  height: 75px;
  position: relative;
  text-align: center;
  line-height: 75px; }

.kopa-tagline-widget .tagline-right .triangle {
  position: absolute;
  top: 0px;
  left: 0px;
  border-top: 38px solid transparent;
  border-bottom: 37px solid transparent;
  border-right: 0px solid transparent;
  border-left: 25px solid #f6f6f6;
  display: block;
  height: 0;
  width: 0;
  transition: border 0.3s ease-in-out 0s;
  -moz-transition: border 0.3s ease-in-out 0s;
  -webkit-transition: border 0.3s ease-in-out 0s; }

.kopa-tagline-widget .tagline-right a {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  display: inline-block; }

.kopa-tagline-widget .tagline-right a:hover {
  color: #2E70D1; }

/*
Kopa portfolio widget
----------------------------------
*/
.kopa-portfolio-widget {
  text-align: left !important; }

.kopa-portfolio-widget .widget-title {
  position: relative;
  text-transform: uppercase;
  padding-bottom: 12px;
  margin: 0 0 20px; }

.kopa-portfolio-widget .widget-title span {
  position: absolute;
  height: 2px;
  width: 55px;
  background: #0f528a;
  left: 0;
  bottom: 0; }

.kopa-portfolio-widget .author-info header {
  margin-bottom: 10px; }

.kopa-portfolio-widget .author-info header strong {
  color: #333333;
  font-size: 16px; }

.kopa-portfolio-widget .author-info p {
  color: #333333;
  margin-bottom: 15px; }

.kopa-portfolio-widget .author-info .social-links li {
  font-size: 14px;
  border: 1px solid #e8e8e8;
  width: 30px;
  height: 30px;
  margin: 0 0 0 2px; }

.kopa-portfolio-widget .author-info .social-links li:first-child {
  margin: 0; }

.kopa-portfolio-widget .author-info .social-links li:hover {
  border-color: #2E70D1; }

.kopa-portfolio-widget .author-info .social-links li:hover a {
  color: #2E70D1; }

.kopa-portfolio-widget .author-info .social-links li a {
  display: block;
  line-height: 28px;
  text-align: center;
  color: #333333; }

.portfolio-list .portfolio-item {
  position: relative; }

.portfolio-list .portfolio-item .portfolio-thumb {
  position: relative;
  margin-bottom: 15px;
  overflow: hidden; }

.portfolio-list .portfolio-item .portfolio-thumb img {
  display: block;
  width: 100%; }

.portfolio-list .portfolio-item .portfolio-thumb .thumb-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/portal-theme/css/img/background/bg/1.png");
  background: rgba(255, 255, 255, 0.6);
  opacity: 0;
  filter: Alpha(Opacity=0); }

.portfolio-list .portfolio-item .portfolio-thumb .thumb-hover ul {
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  margin-top: -28px;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -o-transform: scale(0.2);
  transform: scale(0.2); }

.portfolio-list .portfolio-item .portfolio-thumb .thumb-hover ul li {
  display: inline-block;
  list-style: none;
  padding: 0 6px; }

.portfolio-list .portfolio-item .portfolio-thumb .thumb-hover ul li a {
  width: 57px;
  height: 57px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  background: #2E70D1;
  color: #fff;
  font-size: 22px;
  line-height: 55px;
  display: block; }

.portfolio-list .portfolio-item .portfolio-thumb:hover img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  transition: all 0.6s;
  -ms-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s; }

.portfolio-list .portfolio-item .portfolio-thumb:hover .thumb-hover {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.portfolio-list .portfolio-item .portfolio-thumb:hover .thumb-hover ul {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1); }

.portfolio-list .portfolio-item .portfolio-thumb:hover .thumb-hover ul li a:hover {
  opacity: 0.6;
  filter: Alpha(Opacity=60); }

.portfolio-list .portfolio-item .portfolio-title {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase; }

#bottom-sidebar .widget {
  margin-bottom: 40px; }

#bottom-sidebar .widget .widget-title {
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff; }

#bottom-sidebar .widget .textwidget > ul > li {
  list-style: none;
  margin-bottom: 15px; }

#bottom-sidebar .widget .textwidget > ul > li a:hover {
  color: #2E70D1; }

/*
Kopa newsletter widget
----------------------------------
*/
.kopa-newsletter-widget .news-icon {
  text-align: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  background: #1779a0;
  border: 2px solid #fff;
  border-radius: 50%;
  float: left;
  margin-right: 30px; }

.kopa-newsletter-widget .media-body > p {
  font-size: 18px;
  margin-top: -5px; }

.kopa-newsletter-widget .newsletter-form {
  position: relative; }

.kopa-newsletter-widget .newsletter-form .input-email {
  margin-bottom: 0;
  margin-top: 6px; }

.kopa-newsletter-widget .newsletter-form .input-email .email {
  height: 37px;
  padding: 5px 10px;
  border: 1px solid #1779a0;
  background: #1779a0;
  line-height: 26px;
  font-size: 13px;
  width: 68.37209%;
  margin-right: 3.02326%;
  color: #fff;
  float: left; }

.kopa-newsletter-widget .newsletter-form .input-email .email:focus {
  border-color: #fff; }

.kopa-newsletter-widget .newsletter-form .input-email .submit {
  width: 26.97674%;
  border: 1px solid #fff;
  background: #2E70D1;
  color: #fff;
  font-size: 16px;
  height: 37px;
  line-height: 36px;
  padding: 0 20px; }

.sv-icon {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 94px;
  height: 94px;
  line-height: 94px;
  font-size: 40px;
  margin-top: -47px;
  margin-left: -47px;
  position: inherit;
  margin: 0 0 20px 0;
  background: #ef5282;
  border: 2px solid #ef5282;
  color: #fff;
  border-radius: 50%; }

.sv-icon:hover {
  background: #fff;
  color: #ef5282; }

/*
.sv-icon:visited { 
    background: #ef5282;
    color:#fff;
}
*/
/*
.sv-icon:active { 
    background: #ef5282;
    color:#fff;
}
*/
.kopa-service-2-widget .entry-item {
  padding: 30px 6px 35px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 2px solid #e8e8e8;
  text-align: center; }

.kopa-service-2-widget .entry-title {
  text-transform: uppercase; }

.kopa-area {
  padding-top: 55px; }

.kopa-area .widget:first-child.kopa-parallax, .kopa-area .widget:first-child.kopa-home-slider-3-widget, .kopa-area .widget:first-child.home-slider-widget, .kopa-area .widget.home-slider-2-widget:first-child, .kopa-area .widget.kopa-home-slider-4-widget:first-child, .kopa-area .widget:first-child.home-slider-2-widget {
  margin-top: -55px; }

.kopa-area .widget:last-child.kopa-parallax, .kopa-area .widget:last-child.kopa-portfolio-2-widget {
  margin-bottom: 0 !important; }

.kopa-area-1 {
  background: #fff; }

.kopa-area-2 {
  background: #f6f6f6; }

.kopa-area-3 {
  background: #28292d;
  width: 100%; }

.kopa-area-3 a, .kopa-area-3 p, .kopa-area-3 span {
  color: #fff; }

.kopa-area-3 input {
  border-color: #fff;
  color: #fff; }

/* --- parallax ---*/
.parallax {
  position: relative;
  background-position: 50% 0;
  background-attachment: fixed !important;
  background-repeat: repeat; }

.kopa-parallax {
  position: relative;
  text-align: center; }

.kopa-parallax .parallax.parallax-1 {
  background-image: url(/portal-theme/css/img/parallax/people_3.jpg); }

.kopa-parallax .parallax.parallax-2 {
  background-image: url(/portal-theme/css/img/parallax/people_3.jpg); }

.kopa-parallax .kopa-bg {
  /*background: url("/portal-theme/css/img/background/bg/4.png");*/
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; }

.kopa-parallax .widget-title {
  font-family: "Open Sans", sans-serif;
  color: #fff;
  text-transform: uppercase; }

.kopa-parallax .wrapper > p {
  color: #fff;
  opacity: 0.6;
  filter: Alpha(Opacity=60);
  font-size: 16px;
  line-height: 22px; }

.area-inner {
  margin: -8px -8px 0;
  margin-top: -110px;
  /* css inline */
  background: #fff;
  padding: 8px 8px 0; }

.parallax .kopa_widget_text {
  padding: 50px 0 100px;
  color: #fff; }

.parallax .widget:last-child {
  margin-bottom: 0 !important; }

.widget-title.style1 {
  text-transform: uppercase;
  font-size: 13px;
  line-height: 22px;
  color: #fff;
  background: #2E70D1;
  padding: 10px 15px;
  margin-bottom: 25px; }

.widget-title .icon-title {
  margin-right: 12px;
  font-size: 14px; }

.widget-title .icon-title.fa-play-circle-o {
  font-size: 18px;
  line-height: 23px;
  float: left; }

/* ---article-list-1 ---*/
.entry-date.style1 {
  margin-right: 18px; }

.entry-date.style1 > span {
  display: block;
  text-align: center; }

.entry-date.style1 > span.entry-month {
  background: #FC8D12;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 22px;
  width: 78px; }

.entry-date.style1 > span.entry-day {
  background: #2E70D1;
  padding: 17px 22px 22px;
  width: 78px;
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  color: #fff;
  overflow: hidden; }

.article-list-1 > ul > li {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e8e8e8; }

.article-list-1 .entry-content > p span {
  color: #2E70D1; }

/* --- article-list-2 ---*/
.article-list-2 .entry-item .entry-thumb {
  margin-bottom: 15px; }

.article-list-2 .entry-item .entry-date {
  color: #7e95a8;
  margin-bottom: 5px;
  display: inline-block; }

.article-list-2 .entry-item .entry-date > i {
  color: #7e95a8; }

/* --- twitter-widget ---*/
.twitter-icon {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  margin-top: -20px;
  margin-left: -20px;
  position: inherit;
  margin: 6px 0 0;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
  color: #2E70D1; }

.kopa-twitter-widget > ul > li, .kopa-twitter-widget .owl-carousel .item > ul > li {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e8e8e8; }

.kopa-twitter-widget > ul > li .twitter-icon, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-icon {
  float: left;
  margin-right: 20px; }

.kopa-twitter-widget > ul > li .twitter-content, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-content {
  overflow: hidden; }

.kopa-twitter-widget > ul > li .twitter-content span, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-content span {
  color: #333333;
  margin-bottom: 5px;
  display: inline-block; }

.kopa-twitter-widget > ul > li .twitter-content span a, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-content span a {
  color: #2E70D1; }

.kopa-twitter-widget > ul > li .twitter-content span a:hover, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-content span a:hover {
  color: #333333; }

.kopa-twitter-widget > ul > li .twitter-content > a, .kopa-twitter-widget .owl-carousel .item > ul > li .twitter-content > a {
  display: block;
  color: #888888; }

.kopa-twitter-widget .owl-pagination {
  position: absolute;
  top: -70px;
  right: 0; }

.kopa-twitter-widget .widget-title.style3, .kopa-twitter-widget .widget-title.style5 {
  margin-bottom: 45px; }

/* --- parallax-2-widget    ---*/
.widget-title.style2 {
  position: absolute;
  top: 50px;
  font-family: "Lato", sans-serif;
  color: #fff;
  text-transform: uppercase; }

.kopa-parallax > .wrapper {
  overflow: hidden; }

.kopa-blog-masonry-widget {
  position: relative;
  text-align: left !important; }

.kopa-blog-masonry-widget .ms-item1 {
  width: 24.95%;
  padding: 110px 0 55px; }

.kopa-blog-masonry-widget .ms-item1 .entry-item {
  background: none; }

.kopa-blog-masonry-widget .ms-item1 .entry-item .entry-thumb .entry-title {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 10px 20px;
  background: url("/portal-theme/css/img/background/bg/bg/black/6.png");
  background: rgba(0, 0, 0, 0.63);
  font-family: "Lato", sans-serif; }

.kopa-blog-masonry-widget .ms-item1 .entry-item .entry-thumb .entry-title a {
  color: #fff; }

.kopa-blog-masonry-widget .ms-item1 .entry-item .entry-thumb .entry-title a:hover {
  color: #2E70D1; }

.kopa-blog-masonry-widget .ms-item1 .entry-item .entry-content {
  padding: 20px 20px 12px; }

.kopa-blog-masonry-widget .ms-item1 .entry-item .entry-content p {
  color: #fff;
  opacity: 0.8;
  filter: Alpha(Opacity=80); }

.kopa-blog-masonry-widget .ms-item1:nth-child(2) {
  background: url(/portal-theme/css/img/background/bg/6.png);
  height: 100%; }

.kopa-blog-masonry-widget .ms-item1.last-item {
  width: 50%;
  position: relative; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-content {
  background: url("/portal-theme/css/img/background/bg/bg/black/6.png");
  background: rgba(0, 0, 0, 0.63);
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 0; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-content .entry-title {
  font-size: 18px;
  line-height: 26px; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-content .entry-title a {
  color: #fff; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-content .entry-title a:hover {
  color: #2E70D1; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-item {
  position: relative; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-item:before, .kopa-blog-masonry-widget .ms-item1.last-item .entry-item:after {
  content: "";
  width: 300%;
  height: 100%;
  background: url("/portal-theme/css/img/background/bg/bg/black/6.png");
  background: rgba(0, 0, 0, 0.43);
  position: absolute;
  left: -300%;
  top: 0; }

.kopa-blog-masonry-widget .ms-item1.last-item .entry-item:after {
  left: auto;
  right: -300%; }

.parallax-2 .kopa-bg {
  background: url(/portal-theme/css/img/background/bg/4.png); }

.parallax-2 .kopa-bg .kopa-bg-inner {
  background: url(/portal-theme/css/img/background/bg/4.png);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 55px; }

.kopa-testimonial-2-widget {
  text-align: center; }

.kopa-testimonial-2-widget .widget-title {
  text-transform: uppercase;
  margin-bottom: 20px; }

.kopa-testimonial-2-widget .item > p {
  font-family: "Roboto Slab", serif;
  font-size: 18px;
  color: #555555;
  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  margin-bottom: 25px; }

.kopa-testimonial-2-widget .item > p:before {
  content: "\f10d";
  margin-right: 20px;
  color: #2E70D1; }

.kopa-testimonial-2-widget .item > p:after {
  content: "\f10e";
  margin-left: 20px;
  color: #2E70D1; }

.kopa-testimonial-2-widget .item .tes-author img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 15px; }

.kopa-testimonial-2-widget .item .tes-author span {
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #555555;
  margin-bottom: 5px; }

.kopa-testimonial-2-widget .item .tes-author p {
  display: block;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 15px; }

.portfolio-thumb {
  width: 100%;
  position: relative; }

.portfolio-thumb img {
  width: 100%; }

.portfolio-thumb:hover .thumb-hover {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.portfolio-thumb .thumb-icon {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 63px;
  height: 63px;
  line-height: 63px;
  font-size: 16px;
  margin-top: -31.5px;
  margin-left: -31.5px;
  border-radius: 50%;
  color: #fff;
  left: 50%;
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.5); }

.kopa-portfolio-2-widget {
  text-align: center; }

.kopa-portfolio-2-widget .widget-title {
  margin-bottom: 10px; }

.kopa-portfolio-2-widget .wrapper > header {
  margin-bottom: 40px; }

.kopa-portfolio-2-widget .wrapper > header > p {
  font-size: 16px;
  line-height: 22px; }

.kopa-portfolio-2-widget .portfolio-list-item {
  width: 100%; }

.kopa-portfolio-2-widget .portfolio-list-item > li {
  width: 25%;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out; }

.kopa-portfolio-2-widget .portfolio-list-item > li.inactive {
  visibility: hidden;
  opacity: 0; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item {
  overflow: hidden;
  width: 100%;
  position: relative; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-thumb > a > img {
  transition: all 0.4s;
  -ms-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-thumb .thumb-icon {
  opacity: 0;
  filter: Alpha(Opacity=0);
  -webkit-transform: translateY(120px);
  -moz-transform: translateY(120px);
  -ms-transform: translateY(120px);
  transform: translateY(120px);
  margin-top: -64.5px; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption {
  position: absolute;
  bottom: -100%;
  padding: 10px 15px;
  width: 100%;
  text-align: left;
  transition: all 0.4s;
  -ms-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: #fff; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption .portfolio-title {
  text-transform: capitalize;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 0; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-caption .portfolio-categories {
  text-transform: capitalize; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item:hover .portfolio-thumb .thumb-icon {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  filter: Alpha(Opacity=100); }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item:hover .portfolio-thumb .thumb-icon:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  transition: all 0.4s;
  -ms-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: #2E70D1; }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item:hover .portfolio-thumb > a > img {
  -webkit-transform: translateY(-66px);
  -moz-transform: translateY(-66px);
  -ms-transform: translateY(-66px);
  transform: translateY(-66px);
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

.kopa-portfolio-2-widget .portfolio-list-item .portfolio-item:hover .portfolio-caption {
  bottom: 0; }

.portfolio-container,
.portfolio-container2 {
  position: relative; }

/*--- filter ---*/
.filters-options, .filters-options2 {
  margin-bottom: 30px;
  text-align: center; }

.filters-options li, .filters-options2 li {
  padding: 0 2px;
  margin: 0 10px 10px;
  display: inline-block;
  cursor: pointer;
  line-height: 30px;
  color: #888888;
  text-transform: uppercase;
  position: relative; }

.filters-options li:before, .filters-options2 li:before {
  background: #2E70D1;
  height: 3px;
  overflow: hidden;
  position: absolute;
  bottom: -5px;
  right: 50%;
  left: 50%;
  content: ''; }

.filters-options li:after, .filters-options2 li:after {
  background: #2E70D1;
  height: 3px;
  overflow: hidden;
  position: absolute;
  bottom: -5px;
  right: 50%;
  left: 50%;
  content: '';
  border: none;
  margin: 0;
  width: inherit; }

.filters-options li:first-child, .filters-options2 li:first-child {
  margin-left: 0; }

.filters-options li.active, .filters-options li:hover, .filters-options2 li.active, .filters-options2 li:hover {
  color: #2E70D1; }

.filters-options li.active:before, .filters-options li:hover:before, .filters-options2 li.active:before, .filters-options2 li:hover:before {
  left: 0; }

.filters-options li.active:after, .filters-options li:hover:after, .filters-options2 li.active:after, .filters-options2 li:hover:after {
  right: 0; }

.filters-options li input, .filters-options2 li input {
  display: none; }

.filters-options2 {
  text-align: left;
  margin-left: 10px; }

.widget-title.style3, .widget-title.style5 {
  position: relative;
  margin-bottom: 35px;
  text-align: left;
  text-transform: uppercase; }

.widget-title.style3:before, .widget-title.style5:before {
  content: '';
  background: #2E70D1;
  height: 2px;
  width: 55px;
  position: absolute;
  bottom: -10px;
  left: 0; }

.kopa-mission-carousel-widget .owl-pagination {
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 20px; }

.kopa-mission-carousel-widget .owl-theme .owl-controls .owl-page span {
  width: 12px;
  height: 12px;
  background: none;
  border: 2px solid #fff; }

.kopa-mission-carousel-widget .owl-theme .owl-controls .owl-page.active span, .kopa-mission-carousel-widget .owl-theme .owl-controls .owl-page:hover span {
  background: #fff; }

.mission-txt {
  margin-bottom: 18px; }

.kopa-mission-list li {
  color: #333333;
  margin-top: 10px; }

.kopa-mission-list li span:first-child {
  color: #2E70D1;
  margin-right: 10px; }

.kopa-our-mission .widget_text {
  text-align: left !important; }

.kopa-our-mission .widget_text .widget-title {
  margin-top: -5px; }

.kopa-team-widget {
  text-align: center; }

.kopa-team-widget .widget-title {
  margin-bottom: 2px; }

.kopa-team-widget > header > span {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  display: block;
  margin-bottom: 90px; }

.kopa-team-widget .owl-carousel-4 .item {
  padding: 0 10px;
  width: 100%; }

.kopa-team-widget .owl-carousel-4 .entry-item {
  background: none; }

.kopa-team-widget .owl-carousel-4 .entry-thumb {
  margin-bottom: 20px;
  overflow: hidden; }

.kopa-team-widget .owl-carousel-4 .entry-thumb .thumb-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: url("/portal-theme/css/img/background/bg/2.png");
  background: rgba(0, 139, 196, 0.8);
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  opacity: 0;
  filter: Alpha(Opacity=0); }

.kopa-team-widget .owl-carousel-4 .entry-thumb .thumb-hover > ul {
  position: absolute;
  left: 0;
  top: -50px;
  text-align: center;
  width: 100%;
  margin-top: -28px; }

.kopa-team-widget .owl-carousel-4 .entry-thumb .thumb-hover > ul > li {
  display: inline-block;
  padding: 0 6px;
  margin: 0;
  float: none; }

.kopa-team-widget .owl-carousel-4 .entry-thumb .thumb-hover > ul > li a {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  margin-top: -22.5px;
  margin-left: -22.5px;
  position: inherit;
  margin: 0;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;
  background: none; }

.kopa-team-widget .owl-carousel-4 .entry-thumb .thumb-hover > ul > li a:hover {
  background: #fff;
  color: #2E70D1; }

.kopa-team-widget .owl-carousel-4 .entry-thumb:hover > a img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  transition: all 0.6s;
  -ms-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s; }

.kopa-team-widget .owl-carousel-4 .entry-thumb:hover .thumb-hover {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.kopa-team-widget .owl-carousel-4 .entry-thumb:hover .thumb-hover > ul {
  top: 50%;
  transition: all 0.6s;
  -ms-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s; }

.kopa-team-widget .owl-carousel-4 .entry-content > header {
  position: relative;
  margin-bottom: 20px; }

.kopa-team-widget .owl-carousel-4 .entry-content > header .team-name {
  text-transform: uppercase;
  margin-bottom: 5px; }

.kopa-team-widget .owl-carousel-4 .entry-content > header .team-pos {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 18px;
  display: inline-block; }

.kopa-team-widget .owl-carousel-4 .entry-content > header:before {
  content: '';
  background: #2E70D1;
  height: 2px;
  width: 55px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -27.5px; }

.kopa-team-widget .owl-carousel-4 .owl-controls {
  position: absolute;
  top: -70px;
  left: 50%;
  margin-left: -35px; }

.kopa-team-widget .owl-carousel-4 .owl-controls .owl-buttons div {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 35px;
  height: 35px;
  line-height: 34px;
  font-size: 20px;
  margin-top: -17.5px;
  margin-left: -17.5px;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
  position: inherit !important;
  margin: 0 1px !important;
  padding: 0 !important;
  background: #fff;
  color: #888888; }

.kopa-team-widget .owl-carousel-4 .owl-controls .owl-buttons div:hover {
  background: #2E70D1;
  border-color: #2E70D1;
  color: #fff; }

.kopa-team-widget .owl-carousel-4 .owl-controls .owl-buttons div.owl-next {
  padding-left: 1px !important; }

.kopa-team-widget .owl-carousel-4 .owl-controls .owl-buttons div.owl-prev {
  padding-right: 1px !important; }

.kopa-event-widget > header {
  text-align: center; }

.kopa-event-widget > header > span {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
  display: block; }

.kopa-event-widget .kopa-event-content {
  text-align: left;
  position: relative; }

.kopa-event-widget .kopa-event-content .kopa-line {
  position: absolute;
  left: 50%;
  margin-left: -3px;
  width: 3px;
  height: 100%;
  background: #dadada; }

.kopa-event-widget .kopa-event-content .kopa-line:before {
  content: "";
  width: 10px;
  height: 72px;
  background: #f6f6f6;
  position: absolute;
  top: 0; }

.kopa-event-widget .kopa-event-content .kopa-line:after {
  content: "";
  width: 10px;
  height: 72px;
  background: #f6f6f6;
  position: absolute;
  bottom: 0; }

.kopa-event-widget .kopa-event-content .entry-item {
  background: #FFF; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li {
  width: 47.69565%;
  margin-top: 55px; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item {
  padding: 0 0 20px 20px;
  border: 1px solid #e8e8e8;
  position: relative; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item .entry-content {
  overflow: hidden;
  padding: 20px 20px 0 0; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.triggle {
  content: '';
  position: absolute;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 10px solid #e8e8e8;
  top: 0;
  right: -10px;
  top: 50%;
  margin-top: -9px; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.triggle:before {
  content: '';
  position: absolute;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 10px solid white;
  top: 0;
  right: -10px;
  top: 50%;
  right: 2px;
  margin-top: -9px; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon {
  width: 14px;
  height: 26px;
  background: #f6f6f6;
  position: absolute;
  top: 50%;
  right: -25px;
  margin-right: -9px;
  margin-top: -13px; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon:before {
  content: "";
  position: absolute;
  top: 6px;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 2px solid #2E70D1;
  border-radius: 50%; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content {
  float: right;
  margin-top: -25px; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item .entry-date.style1 {
  float: right !important; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.triggle {
  content: '';
  position: absolute;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-right: 10px solid #e8e8e8;
  top: 0;
  left: -10px;
  top: 50%;
  left: -10px;
  border-left: none;
  right: inherit; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.triggle:before {
  content: '';
  position: absolute;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-right: 10px solid white;
  top: 0;
  left: -10px;
  left: 2px;
  right: inherit;
  border-left: none; }

.kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.entry-icon {
  top: 50%;
  left: -27px;
  margin-left: -9px; }

.kopa-loadmore {
  text-align: center;
  margin-top: 40px; }

.kopa-loadmore span {
  display: inline-block;
  line-height: 14px;
  padding: 10px 46px 10px 15px;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  background: #fff;
  position: relative;
  text-transform: uppercase; }

.kopa-loadmore span > i {
  width: 35px;
  height: 35px;
  line-height: 36px;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid #e8e8e8;
  font-size: 20px; }

.kopa-loadmore span:hover {
  background: #2E70D1;
  color: #fff; }

.kopa-loadmore span:hover > i {
  color: #fff; }

.widget-title.style4 {
  position: relative;
  margin-bottom: 30px;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8; }

.widget-title.style4:before {
  content: '';
  background: #2E70D1;
  height: 1px;
  width: 62px;
  position: absolute;
  bottom: -1px;
  left: 0; }

.article-list-3 > ul > li {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8; }

.article-list-3 > ul > li:last-child {
  margin: 0; }

.article-list-3 .entry-thumb {
  width: 76px;
  float: left;
  margin-right: 15px; }

.article-list-3 .entry-title {
  text-transform: none;
  font-weight: 600;
  margin-top: -5px; }

.article-list-3 .entry-date > i {
  color: #888888; }

.article-list-3 .entry-content {
  overflow: hidden; }

#main-content .sidebar .widget {
  margin-bottom: 30px; }

/**
 * 6.0 Content
 * -----------------------------------------------------------------------------
 */
.entry-title {
  margin-bottom: 5px;
  text-transform: uppercase; }

.entry-thumb {
  width: 100%;
  position: relative;
  overflow: hidden; }

.entry-thumb img {
  width: 100%; }

.entry-thumb:hover .thumb-hover {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.entry-thumb .thumb-icon {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 63px;
  height: 63px;
  line-height: 60px;
  font-size: 20px;
  margin-top: -31.5px;
  margin-left: -31.5px;
  border: 3px solid #fff;
  border: 3px solid rgba(255, 255, 255, 0.68);
  border-radius: 50%;
  color: #fff;
  left: 50%;
  background: url("/portal-theme/css/img/background/bg/4.png");
  background: rgba(0, 0, 0, 0.7); }

.more-link {
  color: #2E70D1;
  text-transform: capitalize;
  display: inline-block;
  margin-top: 10px; }

.entry-item .thumb-icon:before {
  content: "+";
  font-weight: bold;
  margin-top: -2px;
  display: block; }

.portfolio-item .thumb-icon:before {
  content: '\f064'; }

.video-post .thumb-icon:before {
  content: '\f04b';
  padding-left: 5px;
  margin-top: 0; }

.gallery-post .thumb-icon:before {
  content: '\f03e';
  margin-top: 0; }

.standard-post .thumb-icon:before {
  content: "\f15c";
  margin-top: 0; }

.audio-post .thumb-icon:before {
  content: "\f028";
  margin-top: 0; }

.link-post .thumb-icon:before {
  content: "\f0c1";
  margin-top: 0; }

.quote-post .thumb-icon:before {
  content: "\f10d";
  margin-top: 0; }

.review-post .thumb-icon:before {
  content: "+";
  font-weight: bold; }

.entry-date i {
  margin-right: 10px;
  color: #9ed3e9; }

.entry-author {
  margin-right: 25px; }

.entry-author:hover {
  color: #2E70D1; }

.entry-author i {
  margin-right: 10px; }

.entry-comments {
  margin-right: 25px; }

.entry-comments:hover {
  color: #2E70D1; }

.entry-comments i {
  margin-right: 10px; }

.entry-categories {
  margin-right: 25px; }

.entry-categories:hover {
  color: #2E70D1; }

.entry-categories i {
  margin-right: 10px; }

.entry-meta > span, .entry-meta > p {
  display: inline-block;
  margin: 0;
  margin-left: 25px; }

.entry-meta > span:first-child, .entry-meta > p:first-child {
  margin: 0; }

.entry-meta > span span, .entry-meta > p span {
  margin-right: 10px; }

.entry-meta > span a, .entry-meta > p a {
  color: #888888; }

.entry-meta > span a:hover, .entry-meta > p a:hover {
  color: #2E70D1; }

.pagination {
  display: block;
  text-align: center;
  height: 26px; }

.pagination ul {
  display: inline-block; }

.pagination ul li {
  float: left;
  margin: 0 0 0 3px;
  list-style: none;
  line-height: 1;
  font-size: 14px; }

.pagination ul li:first-child {
  margin-left: 0; }

.pagination ul li a {
  line-height: 1;
  display: block;
  padding: 5px 10px;
  border: 1px solid #e8e8e8; }

.pagination ul li span {
  line-height: 1;
  display: block;
  padding: 5px 10px;
  border: 1px solid #e8e8e8; }

.pagination ul li .current {
  color: #fff;
  border-color: #2E70D1;
  background: #2E70D1; }

#back-top {
  position: absolute;
  right: 30px;
  bottom: 30px;
  margin-bottom: 0;
  z-index: 100;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  padding: 3px;
  width: 57px;
  height: 57px;
  background: rgba(255, 255, 255, 0.2); }

#back-top a {
  width: 100%;
  height: 100%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  background: #2E70D1;
  display: block;
  text-align: center;
  line-height: 51px;
  color: #fff !important;
  font-size: 20px; }

#back-top a:before {
  font-family: 'FontAwesome';
  content: "\f062"; }

#back-top a:hover {
  background: #111111; }

#ascrail2000 {
  opacity: .6 !important;
  z-index: 999999999 !important;
  width: 5px !important;
  background: rgba(0, 0, 0, 0.15) !important;
  cursor: pointer;
  transition: all 0.2s;
  -ms-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s; }

#ascrail2000 div {
  width: 5px !important;
  border-radius: 0 !important;
  transition: all 0.2s;
  -ms-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s; }

.kopa-pagination {
  margin-bottom: 60px; }

.kopa-pagination ul li:first-child {
  margin: 0;
  padding: 0;
  border: 1px solid #d0d0d0; }

.kopa-pagination ul li {
  display: inline-block;
  border: 1px solid #d0d0d0;
  margin-left: 4px;
  cursor: pointer;
  background: #fff;
  line-height: 31px;
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s; }

.kopa-pagination ul li a, .kopa-pagination ul li span {
  display: inline-block;
  width: 39px;
  height: 39px;
  line-height: 39px !important;
  text-align: center;
  transition: all 0;
  -ms-transition: all 0;
  -webkit-transition: all 0;
  -moz-transition: all 0; }

.kopa-pagination ul li:hover, .kopa-pagination ul li.current {
  background: #2E70D1;
  border-color: #2E70D1; }

.kopa-pagination ul li:hover a, .kopa-pagination ul li.current a {
  color: #fff; }

.kopa-pagination ul li.current {
  cursor: text; }

.kopa-pagination ul li.current span {
  color: #fff; }

.kopa-pagination a.prev {
  font-size: 18px; }

.kopa-pagination a.prev:before {
  content: "\f104"; }

.kopa-pagination a.next {
  font-size: 18px; }

.kopa-pagination a.next:before {
  content: "\f105"; }

/**
 * 6.1 Home Page
 * -----------------------------------------------------------------------------
 */
body.kopa-home-2 {
  background: url("/portal-theme/css/img/background/bg-m.jpg"); }

/**
 * 6.2 Sub Page
 * -----------------------------------------------------------------------------
 */
.kopa-breadcrumb {
  background: url("/portal-theme/css/img/background/bg-m.jpg");
  padding: 32px 0 35px; }

.kopa-breadcrumb .pull-left span {
  font-size: 24px;
  line-height: 24px;
  color: #333333;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 10px;
  display: block; }

.kopa-breadcrumb .pull-left p {
  font-family: "Open Sans", sans-serif;
  line-height: 14px; }

.kopa-breadcrumb .pull-right {
  line-height: 48px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif; }

.kopa-breadcrumb .pull-right > span > a {
  color: #888888; }

.kopa-breadcrumb .pull-right > span > a:hover {
  color: #2E70D1; }

.kopa-breadcrumb .pull-right .current-page span {
  font-weight: 600;
  color: #888888; }

.left-area {
  width: 50%;
  height: 120px;
  background: #ef5282;
  position: relative;
  float: left; }

.left-area:before {
  width: 100%;
  height: 100%;
  background: #ef5282;
  position: absolute;
  top: 0;
  left: -100%; }

.left-area:after {
  content: '';
  position: absolute;
  border-left: 0px solid transparent;
  border-right: 60px solid transparent;
  border-top: 120px solid #ef5282;
  bottom: 0;
  left: 50%;
  margin-left: 0px;
  left: 100%; }

.left-area .kopa-social-link-widget {
  margin: 37px 0; }

.right-area {
  width: 50%;
  height: 120px;
  background: #2E70D1;
  margin-top: -34px;
  position: relative;
  float: left; }

.right-area:before {
  width: 100%;
  height: 100%;
  background: #2E70D1;
  position: absolute;
  top: 0;
  right: -100%; }

.right-area:after {
  content: '';
  position: absolute;
  border-top: 120px solid transparent;
  border-bottom: 0 solid transparent;
  border-right: 60px solid #2E70D1;
  top: 0;
  left: -60px; }

.right-area .kopa-newsletter-widget {
  margin: 30px 0; }

.kopa-social-link-widget > span {
  font-size: 18px;
  line-height: 46px;
  float: left;
  margin-right: 30px; }

.kopa-social-link-widget .social-links li {
  margin: 0 0 0 24px; }

.kopa-social-link-widget .social-links li:first-child {
  margin: 0; }

.kopa-social-link-widget .social-links li a {
  text-align: center;
  width: 46px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  background: none;
  color: #fff;
  border: 1px solid #888888; }

.kopa-social-link-widget .social-links li a:hover {
  background: #2E70D1;
  border-color: #2E70D1; }

#bottom-sidebar address {
  color: #fff; }

#bottom-sidebar address a {
  color: #fff; }

#bottom-sidebar address a:hover {
  color: #2E70D1;
  opacity: 1;
  filter: Alpha(Opacity=100); }

address p {
  margin: 20px 0 0; }

address p:first-child {
  margin: 0 0 10px 0;
  opacity: 0.7;
  filter: Alpha(Opacity=70); }

address p > i {
  font-size: 18px;
  color: #2E70D1;
  float: left;
  margin-right: 20px; }

/*
Categories page
----------------------------------
*/
.kopa-entry-list > ul > li, .kopa-entry-post > ul > li {
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e8e8e8; }

.kopa-entry-list .entry-item .entry-thumb, .kopa-entry-post .entry-item .entry-thumb {
  margin-bottom: 30px; }

.kopa-entry-list .entry-item .content-body, .kopa-entry-post .entry-item .content-body {
  overflow: hidden; }

.kopa-entry-list .entry-item .content-body > header, .kopa-entry-post .entry-item .content-body > header {
  margin-bottom: 15px; }

.kopa-entry-list .entry-item .content-body .entry-title, .kopa-entry-post .entry-item .content-body .entry-title {
  margin: -5px 0 15px; }

/*
Portfolio page
----------------------------------
*/
.kopa-portfolio-page .widget-title {
  text-transform: uppercase; }

.kopa-portfolio-page .kopa-portfolio-widget {
  margin-bottom: 60px; }

.kopa-portfolio-page .kopa-portfolio-widget .filters {
  text-align: left; }

.kopa-portfolio-page .kopa-portfolio-widget .portfolio-list {
  height: 100%;
  margin-left: -0.86957%;
  margin-right: -0.86957%; }

.kopa-portfolio-page .kopa-portfolio-widget .portfolio-list .col-md-3 {
  padding-top: 1.73913%;
  padding-left: 0.86957%;
  padding-right: 0.86957%;
  width: 24.5%;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out; }

.kopa-portfolio-page .kopa-portfolio-widget .portfolio-list .col-md-3.inactive {
  visibility: hidden;
  opacity: 0; }

/*
Shop page
----------------------------------
*/
.slider {
  position: relative;
  width: 100%;
  /*  height:453px; when responsive, comment this out */
  margin: 0 auto;
  background: #f6f6f6;
  overflow: hidden; }

.slide-intro {
  font-size: 24px !important;
  color: #3a4245;
  padding-bottom: 15px;
  text-transform: capitalize;
  position: relative; }

.slide-intro:before {
  content: '';
  background: #3a4245;
  height: 1px;
  width: 86px;
  position: absolute;
  bottom: -1px;
  left: 0; }

.slide-caption {
  font-family: "Open Sans", sans-serif;
  font-size: 40px !important;
  color: #3a4245;
  text-transform: uppercase;
  font-weight: 700; }

.slide-link {
  font-family: "Open Sans", sans-serif;
  font-size: 14px !important;
  line-height: 14px;
  color: #3a4245;
  border: 1px solid #3a4245;
  text-transform: uppercase;
  font-weight: 700;
  padding: 15px 20px; }

.slide {
  display: none; }

/*--- banner ---*/
.kopa-ads-widget > .row {
  margin-top: -20px; }

.kopa-ads-widget > .row > .col-md-3 {
  margin-top: 20px; }

.ads-item > a {
  position: relative;
  display: block;
  overflow: hidden; }

.ads-item > a > img {
  width: 100%; }

.ads-item > a .thumb-hover {
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%; }

.ads-item > a .thumb-hover > h6 {
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  left: 20px;
  bottom: 20px;
  margin: 0; }

.ads-item > a:hover > img {
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -o-transform: scale(1.3);
  transform: scale(1.3);
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s; }

/*--- kopa-product-list-widget ---*/
.kopa-product-list-widget {
  text-align: center; }

.kopa-product-list-widget > .row > .col-md-12 > .row {
  margin-top: -20px; }

.kopa-product-list-widget > .row > .col-md-12 > .row > .col-md-3 {
  margin-top: 20px; }

.kopa-product-list-widget .widget-title {
  margin-bottom: 5px; }

.kopa-product-list-widget > .row > div > header > span {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
  display: block; }

.kopa-product-list-widget .entry-item .entry-thumb {
  margin-bottom: 15px; }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  filter: Alpha(Opacity=0); }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul {
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  margin-top: -46.5px;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -o-transform: scale(0.2);
  transform: scale(0.2); }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul li {
  display: inline-block;
  list-style: none;
  padding: 20px 12px;
  margin: 0 3px;
  width: 94px;
  height: 93px;
  background: #fff;
  background: rgba(255, 255, 255, 0.7);
  text-align: center; }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul li:hover {
  background: #fff; }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul li a > span {
  display: block; }

.kopa-product-list-widget .entry-item .entry-thumb .thumb-hover ul li a > span.fa {
  font-size: 25px;
  margin-bottom: 5px; }

.kopa-product-list-widget .entry-item .entry-thumb:hover .thumb-hover {
  opacity: 1;
  filter: Alpha(Opacity=100); }

.kopa-product-list-widget .entry-item .entry-thumb:hover .thumb-hover ul {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1); }

.kopa-product-list-widget .entry-item .entry-title {
  text-transform: none;
  font-weight: 600; }

.kopa-product-list-widget .entry-item .entry-content > header {
  margin-bottom: 15px; }

.kopa-rating ul {
  text-align: center; }

.kopa-rating li {
  font-size: 15px;
  display: inline-block;
  color: #2E70D1;
  margin-left: 0; }

.kopa-rating li.inactive span:before {
  content: "\f006"; }

.product-info > ul > li {
  width: 33.33333%;
  height: 40px;
  float: left;
  border: 1px solid #d0d0d0;
  background: #fff;
  font-size: 16px;
  font-weight: 700; }

.product-info > ul > li > a {
  color: #888;
  font-size: 18px;
  line-height: 40px; }

.product-info > ul > li > a:hover i {
  color: #2E70D1; }

.product-info > ul > li > p {
  line-height: 40px; }

.product-info > ul > li.cl-border {
  margin: 0 -1px;
  padding: 1px;
  border-color: #2E70D1;
  position: relative; }

.product-info > ul > li.cl-border > a {
  display: block;
  line-height: 34px; }

.product-info > ul > li.cl-border > a > i {
  color: #2E70D1; }

.product-info > ul > li.cl-border:hover {
  border-width: 2px; }

.product-info > ul > li.cl-border:hover > a {
  background: #2E70D1; }

.product-info > ul > li.cl-border:hover > a i {
  color: #fff; }

/*--- kopa-brand-widget ---*/
.kopa-brand-widget {
  text-align: center; }

.kopa-brand-widget .widget-title {
  margin-bottom: 5px; }

.kopa-brand-widget > .row > div > header > span {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
  display: block; }

.kopa-brand-widget .brand-link {
  display: block;
  width: 100%;
  height: 84px;
  border: 1px solid #d0d0d0;
  position: relative; }

.kopa-brand-widget .brand-link > img {
  max-width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto; }

.kopa-brand-widget .brand-link:hover {
  border-color: #2E70D1; }

/*--- kopa-testimonial-3-widget ---*/
.widget-title.style5:before {
  content: '';
  background: #333333; }

.owl-carousel-9, .owl-carousel-10 {
  padding-bottom: 5px; }

.owl-carousel-9 .owl-controls, .owl-carousel-10 .owl-controls {
  top: inherit !important;
  right: inherit !important;
  bottom: 0;
  left: 10px; }

.owl-carousel-9 .owl-controls .owl-buttons div:hover, .owl-carousel-10 .owl-controls .owl-buttons div:hover {
  color: #2E70D1 !important;
  border-color: #2E70D1 !important; }

.kopa-testimonial-3-widget {
  overflow: hidden; }

.kopa-testimonial-3-widget .item > p {
  margin-bottom: 25px; }

.kopa-testimonial-3-widget .item .tes-author {
  margin-left: 80px; }

.kopa-testimonial-3-widget .item .tes-author > span {
  display: inline-block;
  font-weight: bold; }

.kopa-testimonial-3-widget .item .tes-author > p {
  display: inline-block;
  color: #c1c1c1; }

/*--- article-list-4 ---*/
.article-list-4 .entry-item .entry-thumb {
  width: 92px;
  float: left;
  margin-right: 20px; }

.article-list-4 .entry-item .entry-thumb .thumb-hover {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: url("/portal-theme/css/img/background/bg/2.png");
  background: rgba(0, 139, 196, 0.8);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s; }

.article-list-4 .entry-item .entry-thumb .thumb-hover .thumb-icon {
  background: none;
  border: none;
  text-align: center;
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 35px;
  margin-top: -15px;
  margin-left: -15px; }

.article-list-4 .entry-item .entry-thumb:hover .thumb-hover {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1); }

.article-list-4 .entry-item .entry-content .entry-title {
  margin-top: -5px; }

.article-list-4 .entry-item .entry-content .entry-date {
  margin-bottom: 10px;
  display: inline-block; }

.article-list-4 .entry-item .entry-content .entry-date > i {
  color: #888888; }

/*
Contact page
----------------------------------
*/
.kopa-contact-wrapper {
  background: #fff;
  margin-bottom: 50px; }

.contact-title {
  text-transform: uppercase; }

.kopa-map-wrapper #kopa-map, .kopa-map-wrapper #kopa-map-arequipa, .kopa-map-wrapper #kopa-map-central, .kopa-map-wrapper #kopa-map-delegadas {
  height: 400px;
  width: 100%; }

.kopa-map-wrapper #kopa-map img, .kopa-map-wrapper #kopa-map-arequipa img, .kopa-map-wrapper #kopa-map-central img, .kopa-map-wrapper #kopa-map-delegadas img, #map img {
  max-width: none; }

address {
  color: #333333; }

.contact-box .input-block, #respond .input-block {
  position: relative; }

.contact-box input, .contact-box textarea, #respond input, #respond textarea {
  border: 1px solid #d0d0d0 !important;
  color: #888888 !important;
  line-height: 13px !important;
  padding: 13px 8px !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  outline: none !important;
  resize: none;
  width: 100% !important; }

.contact-box input:focus, .contact-box textarea:focus, #respond input:focus, #respond textarea:focus {
  border-color: #2E70D1;
  transition: all 0.6s;
  -ms-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  outline: 0;
  text-indent: 0px; }

.contact-box label.error, #respond label.error {
  color: #2E70D1;
  font-weight: 400;
  margin: 5px 0 0; }

.contact-box .row, #respond .row {
  margin-top: 10px; }

.contact-box .row:first-child, #respond .row:first-child {
  margin-top: 0; }

/* ******** NORMA SEARCH *********  */
.norma-search-box .input-block, #respond .input-block {
  position: relative; }

.norma-search-box input, .norma-search-box select, .norma-search-box textarea, #respond input, #respond textarea {
  border: 1px solid #d0d0d0;
  color: #888888;
  line-height: 13px;
  padding: 12px 15px;
  width: 100%; }

.norma-search-box input:focus, .norma-search-box select:focus, .norma-search-box textarea:focus, #respond input:focus, #respond textarea:focus {
  border-color: #2E70D1;
  transition: all 0.6s;
  -ms-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  outline: 0;
  text-indent: 0px; }

.norma-search-box label.error, #respond label.error {
  color: #2E70D1;
  font-weight: 400;
  margin: 5px 0 0; }

.norma-search-box .row, #respond .row {
  margin-top: 10px; }

.norma-search-box .row:first-child, #respond .row:first-child {
  margin-top: 0; }

.norma-search-box .search-1 {
  margin-top: -15px;
  /* margin-top: 2px;*/ }

.norma-search-button > span {
  position: relative;
  margin: 15px 0 60px;
  display: inline-block; }

.norma-search-button > span:before {
  content: "\f002";
  color: #fff;
  position: absolute;
  top: 14px;
  right: 15px; }

.norma-search-button > span input {
  width: auto !important;
  background: #2E70D1;
  padding: 14px 40px 14px 15px !important;
  border: 1px solid #2E70D1 !important;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff !important;
  display: inline-block;
  text-indent: 0 !important; }

.norma-search-button > span:hover input {
  background: #fff;
  color: #2E70D1 !important; }

.norma-search-button > span:hover:before {
  color: #2E70D1; }

.norma-search-button > span.fa {
  font-size: 16px; }

/* ******** END NORMA SEARCH *********  */
.input-label p:first-child {
  font-weight: 700;
  color: #333333;
  text-transform: uppercase; }

.input-label p span {
  color: red; }

.input-label > span {
  font-weight: 700;
  color: #888888;
  text-transform: uppercase; }

.textarea-label {
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin: 5px 0 10px; }

.textarea-label > span {
  font-weight: 700;
  color: #888888;
  text-transform: uppercase; }

.contact-button > span {
  position: relative;
  margin: 15px 0 60px;
  display: inline-block; }

.contact-button > span:before {
  content: "\f1d9";
  color: #fff;
  position: absolute;
  top: 14px;
  right: 15px; }

.contact-button > span input {
  width: auto !important;
  background: #2E70D1;
  padding: 14px 40px 14px 15px !important;
  border: 1px solid #2E70D1 !important;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff !important;
  display: inline-block;
  text-indent: 0 !important; }

.contact-button > span:hover input {
  background: #fff;
  color: #2E70D1 !important; }

.contact-button > span:hover:before {
  color: #2E70D1; }

.contact-button > span.fa {
  font-size: 16px; }

/*
Singe product page
----------------------------------
*/
/*
Singe porfolio page
----------------------------------
*/
.single-portfolio-page .widget-title {
  text-transform: uppercase; }

.por-txt {
  margin-bottom: 20px; }

.porfolio-meta {
  margin-bottom: 20px; }

.porfolio-meta > p {
  margin-bottom: 5px; }

.porfolio-meta > p > span {
  color: #333333; }

.social-links.style2 > li {
  width: 37px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  background: #f6f6f6;
  margin-left: 2px; }

.social-links.style2 > li > a {
  font-size: 17px;
  line-height: 39px;
  color: #888888;
  display: block; }

.social-links.style2 > li:hover {
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  background: #2E70D1; }

.social-links.style2 > li:hover > a {
  color: #fff;
  transition: all 0;
  -ms-transition: all 0;
  -webkit-transition: all 0;
  -moz-transition: all 0; }

.gallery-related-post {
  overflow: hidden; }

.owl-carousel-6 .item img {
  width: 100%; }

.owl-carousel-7 .item {
  padding: 0 10px;
  width: 100%; }

.owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
  top: 0;
  margin-top: 73px; }

.owl-carousel-7.owl-theme .owl-controls .owl-buttons div.owl-prev {
  left: 10px; }

.owl-carousel-7.owl-theme .owl-controls .owl-buttons div.owl-next {
  right: 10px; }

/*
Singe post page
----------------------------------
*/
.kopa-tag-box {
  padding: 12px 0;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8; }

.kopa-tag-box span {
  color: #333333; }

.kopa-tag-box a {
  color: #888888; }

.social-links.style3 li:first-child {
  margin: 0;
  padding: 0;
  border: 1px solid #d0d0d0; }

.social-links.style3 > li {
  width: 37px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  background: #fff;
  border: 1px solid #d0d0d0;
  margin-left: 2px; }

.social-links.style3 > li > a {
  font-size: 17px;
  line-height: 39px;
  color: #888888;
  display: block; }

.social-links.style3 > li:hover {
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s; }

.social-links.style3 > li:hover > a {
  color: #2E70D1;
  transition: all 0;
  -ms-transition: all 0;
  -webkit-transition: all 0;
  -moz-transition: all 0; }

.kopa-share-post {
  margin-top: 30px; }

.kopa-share-post > span {
  float: left;
  line-height: 37px;
  margin-right: 20px;
  color: #333333; }

.kopa-author {
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  padding: 15px;
  position: relative;
  margin-top: 30px;
  margin-left: 96px; }

.kopa-author .avatar-thumb {
  width: 91px;
  height: 91px;
  display: block;
  float: left;
  margin-right: 20px; }

.kopa-author .avatar-thumb img {
  width: 100%;
  border-radius: 50%; }

.kopa-author .author-content {
  overflow: hidden; }

.kopa-author .author-content > header {
  margin-bottom: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid #e8e8e8; }

.kopa-author .author-content > header .author-name {
  text-transform: uppercase;
  margin-bottom: 5px; }

.kopa-author .author-content > header .author-job {
  color: #333333; }

.kopa-author .author-social-link {
  width: 161px;
  position: absolute;
  top: 20px;
  right: 20px; }

.kopa-author .author-social-link > div > span {
  float: left;
  margin-right: 10px;
  line-height: 30px;
  color: #333333; }

.kopa-author .author-social-link .social-filter {
  position: relative;
  float: left; }

.kopa-author .author-social-link .social-filter > div {
  border: 1px solid #e8e8e8;
  background: #fff;
  padding: 3px 10px;
  width: 63px; }

.kopa-author .author-social-link .social-filter > div > a {
  display: block;
  float: left;
  width: 24px;
  height: 24px;
  background: #2E70D1;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  margin-right: 8px; }

.kopa-author .author-social-link .social-filter > div > a:hover {
  background: #333333; }

.kopa-author .author-social-link .social-filter > div > span {
  float: left;
  font-size: 15px;
  cursor: pointer; }

.kopa-author .author-social-link .social-filter ul {
  display: none;
  position: absolute;
  left: 0;
  top: 28px;
  width: 63px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-top: none;
  font-style: normal;
  z-index: 999; }

.kopa-author .author-social-link .social-filter ul li {
  display: block;
  width: 24px;
  height: 24px;
  background: #2E70D1;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  margin: 8px 0 3px 10px;
  cursor: pointer; }

.kopa-author .author-social-link .social-filter ul li:hover {
  background: #333333; }

.kopa-author .author-social-link .social-filter ul li a {
  color: #fff; }

.kopa-entry-post {
  overflow: hidden; }

.kopa-entry-post > article {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8e8; }

.owl-carousel-8 .item, .owl-carousel-9 .item, .owl-carousel-10 .item {
  padding: 0 10px;
  width: 100%; }

.owl-carousel-8.owl-theme .owl-controls, .owl-theme.owl-carousel-9 .owl-controls, .owl-theme.owl-carousel-10 .owl-controls {
  position: absolute;
  top: -65px;
  right: 10px; }

.owl-carousel-8.owl-theme .owl-controls .owl-buttons div, .owl-theme.owl-carousel-9 .owl-controls .owl-buttons div, .owl-theme.owl-carousel-10 .owl-controls .owl-buttons div {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 15px;
  margin-top: -16px;
  margin-left: -16px;
  background: #fff;
  color: #888888;
  border: 1px solid #d0d0d0;
  position: inherit;
  margin: 0 0 0 2px;
  padding: 0; }

.kopa-related-post {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8e8; }

.kopa-related-post .widget-title {
  margin-bottom: 40px; }

.kopa-related-post .portfolio-item > span {
  display: block;
  margin-top: 8px; }

.kopa-related-post .portfolio-item > span.entry-date {
  color: #888888; }

.kopa-related-post .portfolio-item > span.entry-date > i {
  color: #888888; }

#comments {
  margin-bottom: 10px; }

#comments > h4 {
  text-transform: uppercase; }

#comments .comments-list .comment {
  list-style: none;
  margin-bottom: 30px; }

#comments .comments-list .comment .comment-wrap .comment-avatar {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  float: left; }

#comments .comments-list .comment .comment-wrap .comment-avatar img {
  width: 100%;
  border-radius: 50%; }

#comments .comments-list .comment .comment-wrap .media-body > header {
  margin-bottom: 5px; }

#comments .comments-list .comment .comment-wrap .media-body > header .pull-left h6 {
  margin-bottom: 5px;
  text-transform: uppercase; }

#comments .comments-list .comment .comment-wrap .media-body > header .pull-left span {
  color: #888888; }

#comments .comments-list .comment .comment-wrap .media-body > header .comment-button > span, #comments .comments-list .comment .comment-wrap .media-body > header .comment-button > a {
  float: left;
  margin-left: 10px; }

#comments .comments-list .comment .comment-wrap .media-body > header .comment-button .comment-reply-link {
  font-size: 20px;
  line-height: 27px;
  color: #2E70D1; }

#comments .comments-list .comment .comment-wrap .media-body > header .comment-button .comment-reply-link:hover {
  color: #333333; }

#comments .comments-list .comment .comment-wrap .media-body > header .comment-button .comment-number {
  color: #7e95a8; }

#comments .comments-list .comment .comment-wrap .media-body > p {
  color: #333333;
  position: relative; }

#comments .comments-list .children {
  position: relative; }

#comments .comments-list .children:before {
  content: '';
  position: absolute;
  border-left: 0 solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 60px solid #e8e8e8;
  top: -15px;
  left: 50%;
  margin-left: 0;
  left: 38px; }

#comments .comments-list .children:after {
  content: '';
  position: absolute;
  border-left: 0 solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 60px solid white;
  top: -16px;
  left: 50%;
  margin-left: 0;
  left: 39px; }

#comments .comments-list .children .comment {
  padding-left: 95px; }

#comments .kopa-pagination {
  margin-top: 0;
  padding-top: 30px;
  border-top: 1px solid #e8e8e8;
  margin-bottom: 0; }

#comments .kopa-pagination > ul {
  float: right; }

#respond .contact-button > span {
  margin: 15px 0 0; }

.single-other-post {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e8e8e8; }

.single-other-post > div > a, .single-other-post > div > h6 {
  float: left; }

.single-other-post > div > h6 {
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
  line-height: 39px; }

.single-other-post .fa {
  text-align: center;
  position: absolute;
  top: 50%;
  width: 39px;
  height: 39px;
  line-height: 39px;
  font-size: 18px;
  margin-top: -19.5px;
  margin-left: -19.5px;
  background: #fff;
  color: #888888;
  border: 1px solid #d0d0d0;
  position: inherit;
  margin: 0;
  padding: 0; }

.single-other-post .prev-post {
  float: left; }

.single-other-post .prev-post > a {
  margin-right: 25px; }

.single-other-post .next-post {
  float: right; }

.single-other-post .next-post > a {
  float: right;
  margin-left: 25px; }

/*
404 page
----------------------------------
*/
.error-404 {
  padding: 100px 0;
  position: relative;
  background: #fff; }

.error-404 .left-col {
  width: 41%;
  float: left;
  margin: 0 2%; }

.error-404 .left-col p {
  font-size: 120px;
  font-weight: 700;
  color: #2E70D1;
  line-height: 100px;
  text-align: right; }

.error-404 .right-col {
  width: 50%;
  float: left;
  margin: 0 2%; }

.error-404 .right-col h1 {
  margin-bottom: 10px;
  font-size: 29px;
  color: #2E70D1;
  margin-top: 0; }

.error-404 .right-col a {
  color: #333333; }

.error-404 .right-col a:hover {
  color: #2E70D1; }

/*
Slider page
----------------------------------
*/
.slider-intro {
  font-family: "Open Sans", sans-serif;
  font-size: 42px;
  line-height: 50px; }

.slider-intro > span {
  font-weight: 700; }

.slider-caption {
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #2E70D1 !important; }

.slider-caption-2 {
  font-size: 18px;
  line-height: 26px; }

.slider-intro-2 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  padding: 10px 15px;
  background: #2E70D1;
  text-transform: uppercase; }

.slider-caption-3 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 22px; }

.slider-link > a {
  font-size: 16px;
  display: block !important;
  padding: 10px 40px;
  border: 1px solid #fff;
  text-transform: capitalize; }

.slider-link > a:hover {
  background: #2E70D1;
  border-color: #2E70D1; }

.slider-intro-3 {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 18px; }

.slider-caption-4 {
  font-family: "Open Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative; }

.slider-caption-4:before {
  content: '';
  background: #fff;
  height: 1px;
  width: 146px;
  position: absolute;
  bottom: -25px;
  left: 50%;
  margin-left: -73px; }

.kopa-home-slider-4-widget {
  overflow: hidden;
  padding-bottom: 0;
  background: url(/portal-theme/css/img/slider2/1.jpg) rgba(255, 255, 255, 0.3) 8px 8px no-repeat; }

.kopa-home-slider-4-widget a, .kopa-home-slider-4-widget p, .kopa-home-slider-4-widget span {
  color: #fff; }

.kopa-home-slider-4-widget .slider-content {
  position: relative;
  width: 100%;
  height: 100%; }

.kopa-home-slider-4-widget .slider-content .slider-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/portal-theme/css/img/background/bg/3.png");
  background: rgba(0, 0, 0, 0.47); }

.kopa-home-slider-4-widget .slider {
  background: none;
  overflow: visible;
  height: 100%; }

.kopa-home-slider-4-widget .slider .fraction-slider {
  width: 100% !important;
  height: 100% !important; }

.kopa-home-slider-4-widget .slider .fraction-slider .prev, .kopa-home-slider-4-widget .slider .fraction-slider .next {
  width: 60px;
  height: 60px;
  line-height: 57px;
  font-size: 40px;
  color: #fff;
  background: none;
  border: 1px solid #888888;
  left: 20px; }

.kopa-home-slider-4-widget .slider .fraction-slider .next {
  left: inherit;
  right: 20px; }

/**
* 7.0 Footer
* -----------------------------------------------------------------------------
*/
#kopa-page-footer {
  background: #111111;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  color: #5e5e5e;
  padding: 20px 0;
  position: relative; }

#kopa-page-footer #copyright {
  margin-bottom: 0; }

#kopa-page-footer a {
  color: #5e5e5e; }

#kopa-page-footer a:hover {
  color: #2E70D1; }

/**
* Parallax slider
* -----------------------------------------------------------------------------
*/
.kopa-home-parallax {
  /*
  Header bottom
  -----------------------
  */ }

.kopa-home-parallax #parallax-header {
  background-image: url(/portal-theme/css/img/parallax/12.jpg); }

.kopa-home-parallax #main-content {
  padding-top: 20px; }

.kopa-home-parallax .kopa-bg {
  background: url("/portal-theme/css/img/background/bg/4.png");
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; }

.kopa-home-parallax .kopa-header-top {
  background: none;
  margin-bottom: 7px; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box {
  /*display: none;*/
  height: 48px;
  padding: 13px 45px 13px 0;
  background: #FC8D12;
  position: relative;
  border-right: none; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box h6 {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  /*color: #d4dee9; */
  color: #ffffff;
  text-transform: uppercase; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box h6 a {
  color: #A5550B;
  /*color: #d4dee9; */ }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box h6 a:hover {
  color: #A5550B;
  /*color: #2E70D1;*/ }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box .triangle-wrapper {
  display: none; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box .triangle {
  /*display: none; */
  border-top-color: #FC8D12; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box .kopa-border-bottom {
  display: none; }

.kopa-home-parallax .kopa-header-top .wrapper .left-bg-color {
  background: #FC8D12; }

.kopa-home-parallax .kopa-header-top .wrapper .left-bg-color .kopa-border-bottom {
  display: none; }

.kopa-home-parallax .kopa-header-top .wrapper .ss-box {
  padding: 6px 0; }

.kopa-home-parallax .kopa-header-top .wrapper .ss-box .search-box {
  margin-left: 20px; }

.kopa-home-parallax .kopa-header-top .wrapper .ss-box .social-links {
  margin: 8px 0 0; }

.kopa-home-parallax .search-box .search-form {
  position: relative;
  width: 210px; }

.kopa-home-parallax .search-box .search-form .search-text {
  width: 100% !important;
  border: none !important;
  height: 36px !important;
  padding: 5px 36px 5px 15px !important;
  color: #969696 !important;
  line-height: 26px !important;
  background: none !important;
  box-shadow: none !important;
  border: 1px solid #969696 !important; }

.kopa-home-parallax .search-box .search-form .search-submit {
  color: #fff !important; }

.kopa-home-parallax .search-box .search-form .search-submit:hover {
  color: #2E70D1 !important; }

.kopa-home-parallax .social-links li a {
  color: #fff; }

/*
.kopa-home-parallax .social-links li a:hover {
  color: #fff; 
}
*/
/*--- Slider ---*/
.slide-intro-2 {
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 23px;
  text-transform: uppercase; }

.slide-caption-2 {
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  line-height: 68px;
  font-weight: 700;
  text-transform: uppercase; }

.slide-caption-3 {
  /*font-family: "Pacifico", cursive;*/
  font-size: 18px; }

.slide-caption-4 {
  text-transform: uppercase;
  display: block !important;
  text-align: center;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  line-height: 38px;
  font-weight: 700; }

.slide-caption-5 {
  display: block !important;
  text-align: center;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 23px; }

.slide-caption-6 {
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 28px;
  /*text-transform: uppercase;*/ }

.slide-caption-7, .slide-caption-21 {
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  line-height: 38px;
  font-weight: 700; }

.slide-caption-21 {
  font-size: 50px; }

.slide-caption-20 {
  font-family: "Open Sans", sans-serif;
  font-size: 26px;
  line-height: 38px; }

.slide-icon {
  text-align: center;
  width: 87px !important;
  height: 87px !important;
  line-height: 87px !important;
  font-size: 30px !important;
  background: #678236;
  border-radius: 50%; }

.slide-icon.style1 {
  background: #d81756; }

.slide-icon.style2 {
  background: #d87b17; }

.slide-icon.style3 {
  background: #3f53a9; }

.slide-icon1 {
  text-align: center;
  width: 87px;
  height: 87px;
  line-height: 87px;
  font-size: 30px;
  background: #678236;
  border-radius: 50%; }

.slide-icon1.style1 {
  background: #d81756; }

.slide-icon1.style2 {
  background: #d87b17; }

.slide-icon1.style3 {
  background: #3f53a9; }

.kopa-home-slider-5-widget {
  background: none; }

.kopa-home-slider-5-widget a, .kopa-home-slider-5-widget p, .kopa-home-slider-5-widget span {
  color: #fff; }

.kopa-home-slider-5-widget .slider {
  background: none;
  overflow: visible;
  height: 100%; }

.kopa-home-slider-5-widget .slider .fraction-slider {
  width: 100% !important;
  height: 100% !important; }

.kopa-home-slider-5-widget .slider .fraction-slider .prev, .kopa-home-slider-5-widget .slider .fraction-slider .next {
  width: 56px;
  height: 56px;
  line-height: 56px;
  font-size: 30px;
  color: #fff;
  background: url("/portal-theme/css/img/background/bg/4.png");
  background: rgba(0, 0, 0, 0.45);
  border: none;
  left: 0; }

.kopa-home-slider-5-widget .slider .fraction-slider .next {
  left: auto;
  right: 0; }

/*--- kopa-tagline-2-widget ---*/
.kopa-tagline-2-widget {
  position: relative; }

.kopa-tagline-2-widget .tagline-left {
  width: 74.52174%;
  background: #2E70D1;
  float: left;
  padding: 15px 25px;
  font-size: 15px;
  line-height: 23px;
  color: #fff;
  font-family: "Open Sans", sans-serif; }

.kopa-tagline-2-widget .tagline-left > span {
  float: left;
  margin-right: 32px; }

.kopa-tagline-2-widget .tagline-left > span .fa-comment {
  color: #FC8D12;
  font-size: 50px;
  top: -4px;
  left: 4px; }

.kopa-tagline-2-widget .tagline-left p {
  overflow: hidden; }

.kopa-tagline-2-widget .tagline-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 25.47826%;
  height: 100%;
  background: #FC8D12;
  text-align: center;
  padding: 25px 15px;
  vertical-align: middle;
  font-size: 18px;
  line-height: 26px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-transform: uppercase; }

.kopa-tagline-2-widget .tagline-right a {
  color: #fff; }

.kopa-tagline-2-widget .tagline-right a:hover {
  color: #000; }

.kopa-testimonial-carousel .img-center {
  text-align: left;
  margin-left: -20px; }

.kopa-testimonial-carousel .img-center a {
  width: 100%; }

/**
* 8.0 Responsive
* -----------------------------------------------------------------------------
*/
@media screen and (max-width: 1160px) {
  .ml-2 {
    margin-left: -153px !important; }

  .ml-3 {
    margin-left: -316px !important; }

  .ml-4 {
    margin-left: -479px !important; }

  .ml-5 {
    margin-left: -643px !important; }

  .ml-6 {
    margin-left: -806px !important; }

  .wrapper, .wrapper-2 {
    width: 960px; }

  .kopa-header-top .wrapper .hotline-box {
    background: #f1f1f1;
    border-right: 3px solid #d1d1d1;
    padding: 13px 12px 13px 0;
    position: relative; }

  .social-links li {
    margin: 0 0 0 15px; }

  .kopa-tagline-widget .tagline-right {
    width: 20%; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 55px;
    top: 0; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon {
    margin-right: -4px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.entry-icon {
    margin-left: -4px; }

  .left-area .kopa-social-link-widget {
    margin: 46px 0; }

  .kopa-social-link-widget > span {
    line-height: 30px; }

  .kopa-social-link-widget .social-links li {
    margin: 0 0 0 24px; }

  .kopa-social-link-widget .social-links li:first-child {
    margin: 0; }

  .kopa-social-link-widget .social-links li a {
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    background: none; } }
@media screen and (max-width: 1023px) {
  .ml-2 {
    margin-left: -150px !important; }

  .ml-3 {
    margin-left: -310px !important; }

  .ml-4 {
    margin-left: -470px !important; }

  .ml-5 {
    margin-left: -630px !important; }

  .ml-6 {
    margin-left: -790px !important; }

  .wrapper, .wrapper-2 {
    width: 940px; }

  .kopa-social-link-widget > span {
    line-height: 30px; }

  .kopa-social-link-widget .social-links li {
    margin: 0 0 0 24px; }

  .kopa-social-link-widget .social-links li:first-child {
    margin: 0; }

  .kopa-social-link-widget .social-links li a {
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    background: none; }

  .kopa-tagline-2-widget .tagline-left {
    font-size: 12px;
    line-height: 20px; }

  .kopa-tagline-2-widget .fa-stack-1x, .kopa-tagline-2-widget .fa-stack-2x {
    left: -4px;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 4px; } }
@media screen and (max-width: 979px) {
  .ml-2 {
    margin-left: -380px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -380px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -380px !important; }

  .wrapper, .wrapper-2 {
    width: 760px; }

  .kopa-header-top {
    display: none; }

  .kopa-header-top-2 {
    display: block; }

  .kopa-header-top-2 .social-links {
    line-height: 36px; }

  .kopa-header-top-2 .clearfix {
    height: 36px; }

  .kopa-header-top .clearfix {
    height: 36px; }

  .bg-feature {
    display: none; }

  .kopa-home-1 #main-content, .kopa-home-2 #main-content {
    margin-top: 20px; }

  .main-nav {
    display: none; }

  .main-nav-mobile {
    display: block; }

  .kopa-header-bottom {
    height: 87px; }

  .home-slider-2-widget .owl-theme .owl-controls {
    bottom: 122px; }

  .kopa-service-2-widget > .row {
    margin-top: -20px; }

  .kopa-service-2-widget > .row .col-md-3, .kopa-service-2-widget > .row .col-md-2 {
    width: 50%;
    margin-top: 20px; }

  .kopa-area {
    padding-top: 25px; }

  .kopa-area .widget:first-child.parallax, .kopa-area .widget:first-child.kopa-home-slider-3-widget, .kopa-area .widget:first-child.home-slider-widget, .kopa-area .widget.home-slider-2-widget:first-child, .kopa-area .widget.kopa-home-slider-4-widget:first-child, .kopa-area .widget:first-child.home-slider-2-widget {
    margin-top: -25px; }

  .area-inner > .row {
    margin-top: -20px; }

  .area-inner > .row > .col-md-4 {
    width: 50%;
    margin-top: 20px; }

  .area-inner > .row > .col-md-4:last-child {
    width: 100%; }

  .widget-title.style2 {
    top: 30px; }

  .kopa-blog-masonry-widget .ms-item1 {
    width: 50%;
    padding: 0 0 55px; }

  .kopa-blog-masonry-widget .ms-item1 .entry-item {
    background: url("/portal-theme/css/img/background/bg/bg/black/6.png");
    background: rgba(0, 0, 0, 0.63); }

  .kopa-blog-masonry-widget .ms-item1:nth-child(2) {
    height: auto; }

  .kopa-blog-masonry-widget .ms-item1.last-item {
    width: 100%;
    padding: 85px 0 0; }

  .kopa-blog-masonry-widget .ms-item1.last-item .entry-content {
    bottom: 0; }

  .kopa-portfolio-2-widget .portfolio-list-item .ft-item1 {
    width: 50%; }

  #bottom-sidebar > .wrapper > .row > .col-md-2 {
    width: 25%;
    float: left; }

  #bottom-sidebar > .wrapper > .row > .col-md-4 {
    width: 100%;
    float: left; }

  #bottom-sidebar > .wrapper > .row > .col-md-4 .widget {
    width: 50%; }

  .kopa-tagline-widget .tagline-left p {
    display: none; }

  .kopa-tagline-widget .tagline-right {
    padding-right: 10px;
    text-align: right; }

  .kopa-tagline-widget .tagline-right a {
    font-size: 16px; }

  .kopa-testimonial-widget .widget-title {
    text-indent: -999999px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon {
    margin-right: 0; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.entry-icon {
    margin-left: 0; }

  .kopa-main-col {
    width: 100%; }

  .sidebar {
    width: 100%; }

  .slide-caption {
    font-size: 20px !important;
    margin-top: 10px; }

  .kopa-ads-widget > .row > .col-md-3 {
    width: 50%; }

  .kopa-product-list-widget > .row > .col-md-12 > .row > .col-md-3 {
    width: 50%; }

  .area-inner {
    margin: -70px -8px 0; }

  .contact-form > .row > .col-md-4, .contact-form > .row > .col-md-8 {
    width: 50%; }

  .kopa-social-link-widget > span {
    display: none; }

  .kopa-newsletter-widget .newsletter-form .input-email .submit {
    font-size: 12px; }

  .kopa-portfolio-2-widget .portfolio-list-item .portfolio-item .portfolio-thumb .thumb-icon {
    margin-top: -55.5px; }

  .portfolio-thumb .thumb-icon {
    text-align: center;
    position: absolute;
    top: 50%;
    width: 45px;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    margin-top: -22.5px;
    margin-left: -22.5px;
    left: 50%; }

  .kopa-home-parallax #parallax-header {
    margin-bottom: 150px; }

  .kopa-tagline-2-widget {
    bottom: -145px;
    position: absolute;
    width: 100%; }

  .kopa-home-1 #main-content > .wrapper > .row > .col-md-3, .kopa-home-1 #main-content > .wrapper > .row > .col-md-4, .kopa-home-1 #main-content > .wrapper > .row > .col-md-6, .kopa-home-parallax #main-content > .wrapper > .row > .col-md-3, .kopa-home-parallax #main-content > .wrapper > .row > .col-md-4, .kopa-home-parallax #main-content > .wrapper > .row > .col-md-6 {
    width: 100%; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 799px) {
  .ml-2 {
    margin-left: -364px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -364px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -364px !important; }

  .wrapper, .wrapper-2 {
    width: 728px; }

  .kopa-portfolio-2-widget .portfolio-list-item .ft-item1 {
    width: 50%; }

  .kopa-home-1 #main-content > .wrapper > .row .col-md-6, .kopa-home-1 #main-content > .wrapper > .row .col-md-3 {
    width: 100%; }

  .kopa-tagline-widget .tagline-left p {
    display: block; }

  .kopa-tagline-widget .tagline-right {
    padding-right: 0;
    text-align: center; }

  .kopa-tagline-widget .tagline-right > a {
    font-size: 18px; }

  .kopa-testimonial-widget .widget-title {
    text-indent: 0px; }

  .kopa-portfolio-widget .author-info {
    margin-bottom: 20px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li {
    width: 46.696%; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon {
    margin-right: -6px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.entry-icon {
    margin-left: -6px; }

  .portfolio-list .col-md-3 {
    width: 49% !important; }

  .kopa-portfolio-widget > .row .col-md-6, .kopa-portfolio-widget > .row > .col-md-3 {
    width: 100%;
    float: left; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 105px; }

  .kopa-home-parallax #parallax-header {
    margin-bottom: 130px; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 767px) {
  .ml-2 {
    margin-left: -340px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -340px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -340px !important; }

  .wrapper, .wrapper-2 {
    width: 680px; }

  .article-list-0 > ul {
    margin-top: -20px; }

  .article-list-0 > ul > li {
    margin-top: 20px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-item > span.entry-icon {
    margin-right: -4px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item > span.entry-icon {
    margin-left: -4px; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 90px; }

  .article-list-0 > ul > li.col-md-6 {
    width: 100%; }

  .portfolio-thumb .thumb-icon {
    display: none; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 719px) {
  .ml-2 {
    margin-left: -300px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -300px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -300px !important; }

  .wrapper, .wrapper-2 {
    width: 600px; }

  .home-slider-2-widget .entry-item .entry-content .entry-title {
    font-size: 14px; }

  #bottom-sidebar > .wrapper > .row > .col-md-2 {
    width: 50%;
    float: left; }

  #footer-nav {
    display: none; }

  .home-slider-widget .kopa-home-slider .entry-item .slider-caption h2, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption h2, .kopa-home-slider-4-widget .kopa-home-slider .entry-item .slider-caption h2, .home-slider-2-widget .kopa-home-slider .entry-item .slider-caption h2 {
    font-size: 15px; }

  .kopa-tagline-widget .tagline-left p {
    display: none; }

  .kopa-tagline-widget .tagline-right {
    padding-right: 10px;
    text-align: right; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li {
    width: 46.396%; }

  .pricing-table .column ul li.footer-row .pt-btn {
    line-height: 35px;
    padding: 7px 10px; }

  .kopa-our-mission > .row, .kopa-contact-wrapper > .row {
    margin-top: -20px; }

  .kopa-our-mission > .row .col-md-6, .kopa-contact-wrapper > .row .col-md-6 {
    margin-top: 20px;
    width: 100%; }

  .nav-tabs li > a {
    padding: 10px 25px; }

  .single-portfolio-page #main-content .kopa-area-1 .wrapper .row {
    margin-top: -20px; }

  .single-portfolio-page #main-content .kopa-area-1 .wrapper .row .col-md-2, .single-portfolio-page #main-content .kopa-area-1 .wrapper .row .col-md-3, .single-portfolio-page #main-content .kopa-area-1 .wrapper .row .col-md-4, .single-portfolio-page #main-content .kopa-area-1 .wrapper .row .col-md-6, .single-portfolio-page #main-content .kopa-area-1 .wrapper .row .col-md-6 {
    margin-top: 20px;
    width: 100%; }

  .left-area {
    width: 100%; }

  .left-area:after {
    border: none;
    width: 100%;
    height: 100%;
    background: #ef5282;
    position: absolute;
    top: 0;
    right: -100%; }

  .left-area .kopa-social-link-widget {
    margin: 37px 0; }

  .right-area {
    width: 100%;
    margin: 0; }

  .right-area:after {
    border: none;
    width: 100%;
    height: 100%;
    background: #2E70D1;
    position: absolute;
    top: 0;
    left: -100%; }

  .kopa-social-link-widget > span {
    display: block;
    line-height: 46px; }

  .kopa-social-link-widget .social-links li {
    margin: 0 0 0 24px; }

  .kopa-social-link-widget .social-links li:first-child {
    margin: 0; }

  .kopa-social-link-widget .social-links li a {
    text-align: center;
    width: 46px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    background: none; }

  .kopa-newsletter-widget .newsletter-form .input-email .submit {
    font-size: 16px; }

  .home-slider-2-widget, .home-slider-widget, .home-slider-2-widget, .kopa-home-slider-4-widget {
    margin-bottom: 20px !important; }

  .kopa-home-parallax .kopa-header-bottom .main-nav-mobile {
    width: 60%; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 639px) {
  .ml-2 {
    margin-left: -220px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -220px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -220px !important; }

  body {
    padding: 0; }

  .wrapper, .wrapper-2 {
    width: 440px; }

  .home-slider-2-widget .entry-item .entry-content .entry-title {
    font-size: 10px; }

  .home-slider-2-widget .entry-item .entry-content > p {
    display: none; }

  .home-slider-2-widget .owl-theme .owl-controls {
    bottom: 20px; }

  .kopa-service-2-widget > .row .col-md-3 {
    width: 100%; }

  .area-inner > .row > .col-md-4 {
    width: 100%; }

  .kopa-portfolio-2-widget .portfolio-list-item .ft-item1 {
    width: 100%; }

  #bottom-sidebar > .wrapper > .row > .col-md-4 .widget {
    width: 100%; }

  #footer-nav {
    display: none; }

  .kopa-tagline-widget .tagline-left {
    width: 70.778%; }

  .kopa-tagline-widget .tagline-right {
    width: 26%; }

  .kopa-service-widget > .row {
    margin-top: -20px; }

  .kopa-service-widget > .row > .col-md-4 {
    margin-top: 20px;
    width: 100%; }

  .kopa-portfolio-widget > .row .row {
    margin-top: -20px; }

  .kopa-portfolio-widget > .row .row > .col-md-4 {
    margin-top: 20px;
    width: 100%; }

  .kopa-event-widget .kopa-event-content .kopa-line {
    display: none; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li {
    width: 100%;
    margin-top: 30px; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li .entry-icon, .kopa-event-widget .kopa-event-content .event-post-content > ul > li .triggle {
    display: none; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content {
    margin-top: 30px;
    float: none; }

  .kopa-event-widget .kopa-event-content .event-post-content > ul > li.right-content .entry-item .entry-date.style1 {
    float: left !important; }

  .kopa-elements-page #main-content .wrapper .row {
    float: left;
    margin-top: -20px; }

  .kopa-elements-page #main-content .wrapper .row .col-md-2, .kopa-elements-page #main-content .wrapper .row .col-md-3, .kopa-elements-page #main-content .wrapper .row .col-md-4, .kopa-elements-page #main-content .wrapper .row .col-md-6, .kopa-elements-page #main-content .wrapper .row .col-md-9 {
    margin-top: 20px;
    width: 100%; }

  .pricing-table .column ul li.footer-row .pt-btn {
    line-height: 40px;
    padding: 10px 25px; }

  .kopa-author .author-social-link {
    width: 58px; }

  .kopa-author .author-social-link > div > span {
    display: none; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 50px; }

  .slide-intro {
    font-size: 15px !important;
    padding-bottom: 10px; }

  .slide-intro:before {
    width: 40px; }

  .slide-caption {
    font-size: 14px !important;
    margin-top: 10px; }

  .slide-link {
    padding: 3px 12px 8px; }

  .kopa-brand-widget > .row > .col-md-12 > .row {
    margin-top: -20px; }

  .kopa-brand-widget > .row > .col-md-12 > .row > .col-md-2 {
    width: 50%;
    margin-top: 20px; }

  .kopa-social-link-widget > span {
    display: none; }

  .kopa-portfolio-2-widget .portfolio-list-item > li {
    width: 50%; }

  .kopa-home-parallax .kopa-header-bottom .main-nav-mobile {
    width: 35%; }

  .kopa-home-parallax #parallax-header {
    margin-bottom: 110px; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 479px) {
  .ml-2 {
    margin-left: -160px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -160px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -160px !important; }

  body {
    padding: 0; }

  .wrapper, .wrapper-2 {
    width: 320px; }

  .kopa-blog-masonry-widget .ms-item1 {
    width: 100%; }

  .kopa-bg .kopa-bg-inner {
    display: none; }

  .kopa-blog-masonry-widget .ms-item1 {
    padding: 0 0 10px; }

  .kopa-header-top-2 .social-links {
    display: none; }

  .home-slider-2-widget .owl-theme .owl-controls {
    bottom: 46px; }

  .kopa-tagline-widget .tagline-left h6 {
    font-size: 11px; }

  .kopa-tagline-widget .tagline-right {
    padding: 10px 10px 10px 27px; }

  .kopa-tagline-widget .tagline-right > a {
    font-size: 12px;
    line-height: 20px; }

  .contact-form > .row > .col-md-4, .contact-form > .row > .col-md-8 {
    width: 100%;
    margin-bottom: 10px; }

  .kopa-breadcrumb {
    padding: 10px 0; }

  .kopa-breadcrumb > .wrapper .pull-left {
    display: none; }

  .portfolio-list .col-md-3 {
    width: 100% !important; }

  .kopa-single-page .entry-content .entry-date.style1, .kopa-blog-page .entry-content .entry-date.style1 {
    display: none; }

  .kopa-single-page .entry-meta > span, .kopa-single-page .entry-meta > p, .kopa-blog-page .entry-meta > span, .kopa-blog-page .entry-meta > p {
    display: block;
    margin: 10px 0 0 0; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 90px; }

  .slide-link, .slide-caption {
    display: none !important; }

  .kopa-ads-widget > .row > .col-md-3 {
    width: 100%; }

  .kopa-product-list-widget > .row > .col-md-12 > .row > .col-md-3 {
    width: 100%; }

  .article-list-0 ul li .entry-item .entry-thumb {
    width: 100%; }

  .article-list-0 ul li .entry-item .entry-content {
    padding-right: 20px; }

  .article-list-0 ul li .entry-item .entry-content header {
    margin-right: -20px;
    padding-right: 20px; }

  #back-top {
    bottom: 15px; }

  .left-area .kopa-social-link-widget {
    margin: 46px 0; }

  .kopa-social-link-widget .social-links li {
    margin: 0 0 0 24px; }

  .kopa-social-link-widget .social-links li:first-child {
    margin: 0; }

  .kopa-social-link-widget .social-links li a {
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    background: none; }

  .kopa-newsletter-widget .news-icon {
    display: none; }

  .kopa-home-parallax .kopa-header-bottom .main-nav-mobile {
    width: 20%; }

  .kopa-home-parallax #parallax-header {
    margin-bottom: 0; }

  .kopa-tagline-2-widget {
    display: none; }

  .kopa-blog-masonry-widget .ms-item1.last-item .entry-item .entry-content p {
    display: none; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
@media screen and (max-width: 359px) {
  .ml-2 {
    margin-left: -140px !important; }

  .ml-3 {
    margin-left: 10px !important; }

  .ml-4 {
    margin-left: -140px !important; }

  .ml-5 {
    margin-left: 10px !important; }

  .ml-6 {
    margin-left: -140px !important; }

  body {
    padding: 0; }

  .wrapper, .wrapper-2 {
    width: 280px; }

  .kopa-header-bottom .wrapper .left-color-bg {
    width: 190px; }

  .home-slider-2-widget .entry-item .entry-content .entry-title {
    font-size: 9px; }

  .kopa-tagline-widget .tagline-left {
    width: 69.778%; }

  .kopa-tagline-widget .tagline-left h6 {
    font-size: 9px; }

  .nav-tabs li > a {
    padding: 10px 25px; }

  .social-links.style3 > li {
    width: 35px; }

  .owl-carousel-7.owl-theme .owl-controls .owl-buttons div {
    margin-top: 75px; }

  .kopa-testimonial-carousel .img-center {
    text-align: center;
    margin-left: 0px; } }
/*--- color ---*/
.kopa-home-parallax .kopa-header-top .wrapper .hotline-box, .kopa-home-parallax .kopa-header-top .wrapper .left-bg-color,
.kopa-tagline-2-widget .tagline-right {
  /*background: #FC8D12;*/
  background: transparent; }

.bg-orange {
  background: #FC8D12 !important; }

.icon-suscribe {
  color: #fff; }

.kopa-home-parallax .kopa-header-top .wrapper .hotline-box .triangle {
  border-top-color: #FC8D12;
  /* logo twitter */ }

.kopa-tagline-2-widget .tagline-left > span .fa-comment {
  color: #fff; }

.kopa-tagline-2-widget .tagline-left {
  background: #2E70D1; }

/*
#tweets-news .user, #tweets-news .tweet, #tweets-news .timePosted {
  float:left;
}
*/
#tweets-news .user {
  width: 25%; }

#tweets-news .tweet {
  font-size: 12px !important;
  line-height: 1.3; }

#tweets-news .tweet a {
  color: #fff; }

#tweets-news .tweet a:hover {
  color: #FC8D12; }

/*
.timePosted {
  width:15%;
}
*/
#tweets-news .user {
  clear: left; }

#tweets-news .user a {
  width: 100px; }

#tweets-news .user span span {
  width: 100px;
  display: block;
  margin-top: 10px; }

#tweets-news .user img, #tweets-news .user a > span {
  float: left; }

#tweets-news .interact {
  float: left;
  width: 10%;
  margin-top: -7px; }

#tweets-news .interact a {
  margin-left: 5px;
  float: left; }

#tweets-news .user a > span {
  margin-left: 10px; }

#tweets-news .media img {
  max-width: 250px;
  max-height: 250px; }

#tweets-news #linkage {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #3d3d3d;
  color: #ffffff;
  text-decoration: none;
  padding: 5px;
  width: 10%;
  font-family: arial; }

.kopa-contact-widget address p {
  margin: 10px; }

#tramites-menu-1, #ciudadano-menu-1 {
  display: none; }

#marquee-1 {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  /*float:left;*/
  width: 100%;
  height: auto;
  padding-top: 8px; }

#welcome-show {
  width: 100%;
  height: 2000px !important;
  margin-top: 18%;
  text-align: center;
  /* solo intro */
  display: none;
  display: none;
  transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; }

#welcome-show h1 {
  color: #575756;
  font-family: "Roboto", serif;
  font-style: italic;
  padding-bottom: 20px; }

#welcome-show img, #welcome-show h1 {
  transform: scale(1.5);
  animation: zoomWelcome 3s;
  -moz-animation: zoomWelcome 3s;
  -webkit-animation: zoomWelcome 3s;
  -o-animation: zoomWelcome 3s; }

.noscrollbar {
  line-height: 1.35;
  overflow: hidden;
  white-space: nowrap; }

.wpc-100 {
  width: 100%; }

.text-center {
  text-align: center; }

.text-right {
  text-align: right; }

.text-left {
  text-align: left; }

/*  BUTTONS */
.button-link-1 {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold; }

.button-link-1 .fa {
  font-size: 30px;
  position: left;
  margin-top: -4px;
  margin-left: -30px;
  padding-right: 10px;
  float: left; }

/* line */
.line-divider1 {
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px; }

.line-divider2 {
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: 10px; }

/* end line */
/* text-colors */
.c-white {
  color: #ffffff !important; }

.c-gray {
  color: #58595b;
  /* rgba(88,89,91,1) */ }

.c-orange {
  color: #FC8D12;
  /* rgba(252,153,43,1) */ }

.c-blue {
  color: #2E70D1;
  /* rgba(91,141,219,1) */ }

.c-yelllow {
  color: #FFD324;
  /* rgba(255,217,72,1) */ }

.c-yelllow2 {
  color: #F0C000; }

.c-pink {
  color: #ef5282;
  /* rgba(239,82,130,1) */ }

.c-pink-dark {
  color: #B91143; }

.c-purple {
  color: #6100CC; }

/* end texte-color */
.border-pink-dark {
  border-color: #ef5282; }

/* button colors */
.bg-patron-1 {
  background-image: -webkit-gradient(linear, 100% 100%, 0% 0%, from(transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(255, 255, 255, 0.12)), color-stop(0.5, rgba(255, 255, 255, 0.12)), color-stop(0.5, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(255, 255, 255, 0.12)), to(rgba(255, 255, 255, 0.12)));
  background-image: -webkit-linear-gradient(right bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.12) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 100%);
  background-image: -moz-linear-gradient(right bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.12) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 100%);
  background-image: -ms-linear-gradient(right bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.12) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 100%);
  background-image: -o-linear-gradient(right bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.12) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 100%);
  background-image: linear-gradient(right bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.12) 50%, transparent 50%, transparent 75%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 100%);
  -webkit-background-size: 3px 3px;
  -moz-background-size: 3px 3px;
  -ms-background-size: 3px 3px;
  -o-background-size: 3px 3px;
  background-size: 3px 3px; }

/* gray */
.c-button-gray {
  background-color: #58595b;
  border-color: #58595b;
  text-shadow: 0px 1px 1px #3C3D3E; }

.c-button-gray:hover {
  color: #58595b;
  border-color: #58595b;
  text-shadow: none; }

/* graylight*/
.c-button-graylight {
  background-color: #fff;
  border: none;
  border: 1px solid #e8e8e8;
  color: #58595B;
  margin-bottom: 6px; }

.c-button-graylight:hover {
  color: #796100 !important;
  background: #FFD324;
  border: none;
  border: 1px solid #CCA400 !important;
  /*transform:scale(1.1);*/
  /*box-shadow: 0px 1px 2px rgba(0,0,0,0.3);*/ }

.c-button-graylight:hover > i {
  /*color:#FC8D12;*/ }

.c-button-graylight {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 14px; }

.big-prot {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 14px; }

.big-prot:hover {
  /*
  text-align: center;
  transform:scale(1.8);
  z-index: 9999999999999 !important;
  */
  color: #fff !important;
  border-color: #ef5282 !important;
  background: #ef5282 !important;
  text-shadow: 0px 1px 1px #B81244;
  /* #F48EAD */ }

/* Skew */
.hvr-skew, .c-button-graylight {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform; }

.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active, .c-button-graylight:hover, .c-button-graylight:focus, .c-button-graylight:active {
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg); }

/* Icon Drop */
@-webkit-keyframes hvr-icon-drop {
  0% {
    opacity: 0; }

  50% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%); }

  51%,
  100% {
    opacity: 1; } }

@keyframes hvr-icon-drop {
  0% {
    opacity: 0; }

  50% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%); }

  51%,
  100% {
    opacity: 1; } }

/* Icon Drop */
.hvr-icon-drop {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-right: 2.2em; }

.hvr-icon-drop i {
  /*content: "\f041";*/
  /*position: absolute;*/
  /*left: 1em;*/
  opacity: 1;
  /*font-size: 30px;*/
  /*padding: 0 1px;*/
  /*font-family: FontAwesome;*/
  -webkit-transform: translateZ(0);
  transform: translateZ(0); }

.hvr-icon-drop:hover > i, .hvr-icon-drop:focus > i, .hvr-icon-drop:active > i {
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-animation-name: hvr-icon-drop;
  animation-name: hvr-icon-drop;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); }

.zoom-prot:hover {
  transform: scale(1.16);
  position: relative;
  z-index: 10;
  border-width: 1px !important;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6); }

/*
.big-prot:hover > i{
  float:left;
  display: block;
}

.big-prot:hover > span{
  float:left;
  display: block;
}
*/
/* orange */
.c-button-orange {
  color: #fff;
  background-color: #FC8D12;
  border-color: #FC8D12;
  text-shadow: 0px 1px 1px #DA7403; }

.c-button-orange:hover {
  color: #FC8D12;
  border-color: #FC8D12;
  text-shadow: none; }

/* blue */
.c-button-blue {
  color: #fff;
  background-color: #2E70D1;
  border-color: #2E70D1;
  text-shadow: 0px 1px 1px #2862B9; }

.c-button-blue:hover {
  color: #2E70D1;
  border-color: #2E70D1;
  text-shadow: none; }

/* yellow */
.c-button-yellow {
  color: #fff;
  background-color: #FFD324;
  border-color: #FFD324;
  text-shadow: 0px 1px 1px #C69E00; }

.c-button-yellow:hover {
  color: #FFD324;
  border-color: #FFD324;
  text-shadow: none; }

/* pink */
.c-button-pink {
  color: #fff;
  background-color: #ef5282;
  border-color: #ef5282;
  text-shadow: 0px 1px 1px #B81244; }

.c-button-pink:hover {
  color: #ef5282;
  border-color: #ef5282;
  text-shadow: none; }

/* end butons colors */
.redu-bottom-10 {
  margin-bottom: 10px !important; }

ul.ul-links-1 {
  /*
  list-style-type: disc;
  list-style-color:#FC8D12;
  */
  line-height: normal; }

ul.ul-links-1 li {
  color: #58595b; }

ul.ul-links-1 li a {
  color: #2E70D1;
  font-size: 12px; }

ul.ul-links-1 li a:hover {
  color: #ef5282; }

ul.ul-links-1 li:before {
  /*content: "Ã¯Â¿Â½ ";*/
  font-family: FontAwesome;
  /*font-size: 8px;*/
  content: "\f00c    ";
  color: #ffd324;
  /*#ef5282*/ }

.txt-size-13 {
  font-size: 13px !important;
  font-weight: normal !important; }

.txt-size-12 {
  font-size: 12px !important;
  font-weight: normal !important; }

.line-height-normal {
  line-height: normal; }

.line-height-4px {
  line-height: 30px !important; }

.padding-top-10 {
  padding-top: 10px; }

/*
.margin-top-undermenu2{
  margin-top: -80px !important;
  border:1px solid #333;
  padding-top:0px !important;
}
*/
.mintext-home {
  line-height: normal;
  font-size: 12px;
  padding: 0px 5px;
  text-align: justify;
  /*display: none;*/
  /*
  transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; 
  */
  max-height: 0;
  overflow-y: hidden;
  -webkit-transition: max-height 0.3s ease-in-out;
  -moz-transition: max-height 0.3s ease-in-out;
  -o-transition: max-height 0.3s ease-in-out;
  transition: max-height 0.3s ease-in-out; }

.text-justify {
  text-align: justify; }

.text-size-14 {
  font-size: 14px; }

.z-index-100 {
  z-index: 100; }

ul#menu-butons-2 li:hover > ul {
  opacity: 1;
  visibility: visible;
  position: absolute; }

ul#menu-butons-2 li:hover > div.center-1 div.arrow-up {
  visibility: visible; }

ul#menu-butons-2 li:hover > div a {
  background: #fff;
  color: #ef5282;
  border-color: #ef5282;
  text-shadow: none; }

ul#menu-butons-2 li ul {
  /*display: none;*/
  margin-top: -6px;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  z-index: 100;
  right: 0;
  border: 3px solid #ef5282;
  background: #F48EAD;
  margin-left: 10px;
  padding: 20px;
  /*
    border-right: 1px solid #e8e8e8;
    border-bottom: 2px solid #e8e8e8;
  */ }

.center-1 {
  width: 100% !important;
  margin: 0 auto 0 auto !important;
  text-align: center !important; }

.arrow-up {
  display: inline-block;
  visibility: hidden;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ef5282;
  border-bottom: 10px solid #ef5282;
  /*margin-left:50px;*/
  transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; }

ul#menu-butons-2 li > div.center-1 div.arrow-up {
  transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; }

.tagcloud2 {
  width: 100%; }

.tagcloud2 a {
  width: 100%;
  display: block;
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  /*#B91143;*/
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px dotted #fff;
  text-shadow: 0px 1px 2px #B91143; }

.shadow-pink {
  text-shadow: 0px 1px 2px #B91143 !important; }

.tagcloud2 a:hover {
  /*text-decoration: underline !important;*/
  /*color:#fff;*/
  border: 1px solid #fff;
  color: #fff;
  box-shadow: 0px 0px 8px #B91143;
  /*background:  #B91143;*/
  /*background: #fff;*/ }

/*
ul#menu-butons-2 .fullwidth{
  height: 300px;
  width: 200px; height: 200px;
top: -50; left: 100;
  position: absolute;
  z-index: 100;
  border:1px solid #333;
}
*/
.txt-size-14 {
  font-size: 14px !important; }

.hover-text-efecct {
  background-color: #fff;
  border: none;
  /*border:4px solid #E8E8E8;*/
  /*background-color: #fff;*/
  border: none;
  border: 1px solid #e8e8e8;
  margin-bottom: 6px;
  padding: 10px; }

.hover-text-efecct:hover > h6 {
  color: #FC8D12; }

/*
.hover-text-efecct .mintext-home{
  -webkit-transition: opacity 1s ease-out;
    opacity: 0;
      transition: all .3s;
  -ms-transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s; 
}
*/
.hover-text-efecct:hover > .mintext-home {
  /*
  display: block;
   opacity: 1;
   */
  /*background: #fafafa;*/
  padding: 10px 5px;
  /*color: #484848;*/
  max-height: 1000px; }

.hover-text-efecct:hover > div div ul li a, .hover-text-efecct:hover > ul li a {
  text-decoration: underline !important; }

.no-decoration-1:hover > div div ul li a, .no-decoration-1:hover > ul li a {
  text-decoration: none !important; }

/* purple box*/
.box-purple-2:hover {
  border-color: #8C39F2;
  background: #EAD7FF;
  color: #5E0CC0; }

.box-purple-2:hover h6 {
  border-color: #8C39F2;
  color: #5E0CC0; }

.box-purple-2:hover > div div ul li a {
  color: #5E0CC0; }

.box-purple-2:hover > div div ul li:before {
  color: #5E0CC0; }

/* end purple box */
/* yellow box*/
.box-yellow-2:hover {
  border-color: #CCA400;
  background: #FFD324;
  color: #796100; }

.box-yellow-2:hover h6 {
  border-color: #CCA400;
  color: #796100; }

.box-yellow-2:hover > div div ul li a {
  color: #796100; }

.box-yellow-2:hover > div div ul li:before {
  color: #796100; }

/* end yellow box */
/* orange box*/
.box-orange-2:hover {
  border-color: #FC8D12;
  background: #FED3A5;
  color: #BF6502; }

.box-orange-2:hover h6 {
  border-color: #FC8D12;
  color: #BF6502; }

.box-orange-2:hover > div div ul li a {
  color: #BF6502; }

.box-orange-2:hover > div div ul li:before {
  color: #BF6502; }

/* end orange box */
.padding-medium {
  padding: 4px 0px 4px 10px; }

.m-bottom-0 {
  margin-bottom: 0px !important; }

.m-top-0 {
  margin-top: 0px !important; }

.p-top-0 {
  padding-top: 0px !important; }

.no-text-transform {
  text-transform: none !important; }

.txt-size-14 {
  font-size: 14px; }

.h-86 {
  /*height:86px !important;*/ }

/* ocultando navbar */
.navbar {
  /*display:none;*/ }

.bg-white {
  background: #fff; }

.no-zoom a:hover {
  transform: none !important; }

ul.list-1 {
  padding-left: 20px; }

ul.list-1 li:before {
  font-family: FontAwesome;
  content: "\f105";
  padding-right: 6px;
  color: #2E70D1; }

.widget-title a.white-t {
  color: #fff; }

.widget-title a.white-t:hover {
  text-decoration: underline !important; }

.jus-mod-1 {
  padding: 10px !important;
  font-size: 12px !important;
  text-transform: uppercase !important; }

.jus-mod-1 .h1 {
  font-size: 14px;
  text-transform: uppercase !important;
  line-height: 18px; }

.jus-btn-20 {
  padding-top: 16px !important;
  padding-bottom: 16px !important; }

a.jus-btn-20 {
  font-size: 11px !important; }

.border-gray {
  border: 1px solid #e8e8e8;
  margin: 0 4px;
  margin-top: -1px;
  padding: 8px; }

ul.list-content-one {
  padding-left: 40px; }

ul.list-content-one li:before {
  font-family: FontAwesome;
  font-weight: bold;
  content: "\f00c";
  padding-right: 6px;
  margin-left: -17px;
  /* color:#2E70D1;*/ }

ul.list-content-one li {
  line-height: 14px;
  padding-bottom: 10px; }

/*
* Agregado : dlarico
* Motivo : el texto del titulo de la tablas tenga color blanco
* fecha  : 29/10/2015
*/
.text-center-titulo {
    text-align: center;
    color:  #ffffff;
    font-weight:bold;
}

.alt-div-titulo {
    height: 30px;
}
</style>
<c:choose>
	<c:when test="${empty _css}">
		<c:import url="${_folder}/default-css.jsp" />
	</c:when>
	<c:otherwise>
		<c:import url="${_folder}/${_css}.jsp" />
	</c:otherwise>
</c:choose>

<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- jQuery -->
<script src="js/jquery-ui.js"></script>
<script src="js/jquery-ui-datapicker-es.js"></script>

<!-- jQuery -->
<script src="js/jquery.maskedinput.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Plugin Auto Tab -->
<script src="js/jquery.autotab.js"></script>

<!-- Jquery validate -->
<script src="js/jquery.validate.js"></script>
<!-- Metis Menu Plugin JavaScript -->
<script src="js/plugins/metisMenu/metisMenu.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="js/sb-admin-2.js"></script>
<!-- JSON douglascrockford Library -->
<script src="js/json2.js"></script>

<!-- DataTables JavaScript -->
<script src="js/plugins/dataTables/jquery.dataTables.js"></script>
<!-- <script src="js/plugins/dataTables/dataTables.fixedColumns.js"></script> -->
<script src="js/plugins/dataTables/dataTables.bootstrap.js"></script>
<script src="js/ColReorderWithResize.js"></script>
<script src="js/jquery.blockUI.js"></script>
<script src="js/kendo.glp.all.min.js" type="text/javascript"></script>

<!-- bootstrap con tree -->
<script type="text/javascript" src="js/plugins/treegrid/jquery.treegrid.js"></script>
<script type="text/javascript" src="js/plugins/treegrid/jquery.treegrid.bootstrap3.js"></script>
<script src="js/plugins/bootstrap-maxlength/bootstrap-maxlength.js" type="text/javascript"></script>

<!-- Comun JS -->
<script type="text/javascript" src="js/Comun.js"></script>

<!-- DataUtilitario JavaScript dlarico 14/07/2015-->
<script src="js/utilitario/utilitario.js"></script>
<script src="js/actualizacionRetiro/actualizacionIpress.js"></script>
<!--script src="js/ipressConsulta.js"></script-->

<script>
	$(document).ready(
		function() {				
			/*var sessionGu = true;
			$('.nav li a').each(
				function(index) {
					if (this.href.trim() == window.location) {
						localStorage.setItem("hrefId", this.id);
						$(this).addClass("active");
						$(this).parent().parent().addClass("in");
						$(this).parent().parent().parent().toggleClass("active open");
						sessionGu = false;
					}
				});
				if (sessionGu) {
					var idHref = localStorage.getItem("hrefId");
					if (idHref != null) {
						$("#" + idHref).addClass("active");
						$("#" + idHref).parent().parent().addClass("in");
						$("#" + idHref).parent().parent().parent().toggleClass("active open");
					}
				}*/
			$('input[name=text], textarea').each(
				    function(index){
					    console.log($(this).attr('maxlength'));
					    if($(this).attr('maxlength')!=null){
					    	$(this).maxlength({
					            limitReachedClass: "label label-danger",
					            alwaysShow: true,
					            placement: 'left'
					        });
						}
				        
				    }
				);
		});
</script>

<c:choose>
	<c:when test="${empty _js}">
		<c:import url="${_folder}/default-js.jsp" />
	</c:when>
	<c:otherwise>
		<c:import url="${_folder}/${_js}.jsp" />
	</c:otherwise>
</c:choose>

<style type="text/css">
th {
	border-right: 1px solid black
}
</style>
</head>
<body>

	<div id="wrapper">

		<header id="parallax-header" class="kopa-page-header">
            <div class="kopa-bg"></div>

            <div class="kopa-header-bottom">
                <div class="wrapper clearfix h-86" style="margin:0;width: 100%;">
                    <div class="left-color-bg">
                        <div class="left-color-bg-outer"></div>
                        <div class="triangle"></div>
                    </div>
                    <div class="logo-box pull-left">
                        <img src="image/logo.gif"  width="230px" />
                    </div>
					<div width: 60%;
					 style="    position: absolute;
								margin-top: 10px;
								margin-left: 280px;
								font-weight: bold;
								font-size: 16px;
								color: #FFF;"
					>
						SISTEMA DE GESTIÓN PARA LA CATEGORIZACIÓN DE LAS <br>
						INSTITUCIONES PRESTADORAS DE SERVICIO DE SALUD
					</div>
                    
					<nav class="nav navbar-top-links navbar-right latizator" style="color:#fff">
						<div>		
						<c:if test="${USER_LOGIN != null}">
						<ul class="nav navbar-top-links navbar-right latizator">			
								<li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							  <i class="fa fa-user fa-fw"></i>
							  <i class="fa fa-caret-down"></i>
								  </a>
									<ul class="dropdown-menu dropdown-user">
										<li>
								<a href="login.htm?action=cargarPage&_module=login&_page=login-cambio-contrasena"><i class="fa fa-user fa-fw"></i> Cambiar contrase&ntilde;a</a>
							  </li>
							  <li>
										<a id="idcambiarperfil" href="javascript:logoutPerfil();">
											<i class="fa fa-user fa-fw"></i>Cambiar perfil
										</a>
									</li>
										<li class="divider"></li>
										<li>
								<a href="javascript:logout();"><i class="fa fa-sign-out fa-fw"></i> Cerrar sesi&oacute;n</a></li>
									</ul>
						  </li>
							</ul>
						</c:if>
							
						<c:if test="${USER_LOGIN != null}">
							<ul class="nav navbar-top-links navbar-right">          
							  <c:if test="${USER_LOGIN.getPersonaWs() != null}"><li>${USER_LOGIN.getPersonaWs().getNombreLargo()}</li><br></c:if>
							  <c:if test="${USER_LOGIN.getDesperfil() != null}"><li>${USER_LOGIN.getDesperfil()}</li><br></c:if>
							  <c:if test="${USER_LOGIN.getDesautorsanit() != null}"><li>${USER_LOGIN.getDesautorsanit()}</li></c:if>
							</ul>
						</c:if>
							
					  </div>
					</nav>
                    
                </div>
				
				<!-- INICIO -->
				
				
				
				<!-- FIN -->
				
            </div>            
			
        </header>

	<c:if test="${arreglo == null}">
		<script type="text/javascript">
				
		</script>	
	</c:if>
	
		<nav class="" role="navigation" 
			style="margin-bottom: 0;">

			
			
			
			
			

			<div class="navbar-default sidebar latizator" role="navigation">
				<div class="sidebar-nav navbar-collapse">
					<ul class="nav" id="side-menu">
					
						<li>
							<a	href="#" title="Clic para desplegar"><i
								class="fa fa-sitemap fa-fw"></i>
								PLANIFICACIÓN<span class="fa arrow"></span> 
							</a>
						
							<ul class="nav nav-second-level">
								<li>
									<a 	href="pronosticarPlanCategorizacion.htm?action=mostrarLista" 
										id="idMostrarNorma"
										title="Pronosticar Plan Categorización"> <i
										class="fa fa-caret-right fa-fw"></i>
										Pronosticar Plan Categorización
									</a>
								</li>
							</ul>
							
							<ul class="nav nav-second-level">
								<li>
									<a 	href="confirmarPlanCategorizacion.htm?action=mostrarLista" 
										id="idMostrarNorma"
										title="Confirmar Plan Categorización"> <i
										class="fa fa-caret-right fa-fw"></i>
										Confirmar Plan Categorización
									</a>
								</li>
							</ul>
						</li>
					
					
						
					</ul>
				</div>

			</div>

		</nav>

		<div id="page-wrapper" style="padding-top: 10px;">

			<%-- en este punto, _template nunca viene vacio --%>
			<c:choose>
				<c:when test="${empty _module}">
					<c:choose>
						<c:when test="${empty _page}">
						<c:import url="${_folder}/default-page.jsp" />
<%-- 							<c:import url="${_folder}/default-page.jsp" /> --%>
						</c:when>
						<c:otherwise>
							<c:import url="${_folder}/${_page}.jsp" />
						</c:otherwise>
					</c:choose>
				</c:when>
				<c:otherwise>
					<c:choose>
						<c:when test="${empty _page}">
							<c:import url="${_folder}/${_module}/default-page.jsp" />
<%-- 							<c:import url="${_folder}/${_module}/default-page.jsp" /> --%>
						</c:when>
						<c:otherwise>
							<c:import url="${_folder}/${_module}/${_page}.jsp" />
						</c:otherwise>
					</c:choose>
				</c:otherwise>
			</c:choose>

		</div>

	</div>
	<footer id="kopa-page-footer">
		<div class="wrapper clearfix">
			<p id="copyright" class="pull-left wow fadeInLeft"
				data-wow-duration="0.2s" data-wow-delay="0.2s">© 2016 SUSALUD.
				Todos los derechos reservados.</p>
			<nav id="footer-nav" class="pull-right wow fadeInRight"
				data-wow-duration="0.2s" data-wow-delay="0.2s">
				<ul id="footer-menu" class="clearfix">
					<li><a href="inicio">Inicio</a></li>
					<li><a href="nosotros">Nosotros</a></li>
					<li><a href="superintendenta">Escríbele a la
							Superintendenta</a></li>
					<li><a href="contacto">Contáctanos</a></li>
					<li><a href="transparencia">Transparencia</a></li>
					<li><a href="credito">Crédito</a></li>
				</ul>
			</nav>
		</div>
		<p id="back-top" style="display: block;">
			<a href="#top"></a>
		</p>
	</footer>
    
    <!-- Bootbox code  dlarico 14/07/2015-->
    <script src="js/bootbox/renipress.js"></script>
    <script>
        $(function () {
            Renipress.init({
                "selector": ".bb-alert"
            });
        });
    </script>
    <!-- bootbox code -->
    <script src="js/bootbox/bootbox.js"></script>
    <script src="js/bootbox/bootbox.min.js"></script>	
    <!-- put all demo code in one place -->
    <script src="js/bootbox/demos.js"></script>
    <script src="js/bootbox/renipress.js"></script>
</body>

</html>