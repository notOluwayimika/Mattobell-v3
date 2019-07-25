import React, { Component } from 'react';
import{ Link } from "react-router-dom"

class homePage extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render() { 
        return ( 
            <div>
               <section className="title_small mb-0">
	<div className="text-center pt-5" id="homebackground" >
		<h2 className="pt-5 text-white">3.7million<span class="text-danger"><strong> +</strong></span> users across 5 continents can't be wrong</h2>
		<h3 class="bluetext"><strong>WE HAVE EVERY BUSINESS COVERED</strong></h3>
	</div>
</section>

<section class="image_text_2">
	<div class="container">
		<div class="row">
			<div class="col-lg-4"><img class="HPOL"  src="./images/odooimages/odoologopurple.jpeg" alt="odoologopurple" /></div>
			<div class="col-lg-8">
				<h2>One Integrated Software</h2>
				<h5 class="bluetext text-white">WITH ODOO's SUITE OF APPLICATIONS IN ONE SOFTWARE, YOU WILL NEVER NEED A SECOND BUSINESS AND PRODUCTIVITY SOFTWARE</h5>
				<p>Tons of applications with every industry and business function covered:</p>
				<ul class="ml_3">
					<li>Finance & Accounting</li>
					<li>Budget Management</li>
					<li>Petty Cash / Staff Advances</li>
					<li>Purchasing</li>
					<li>Inventory (Warehousing)</li>
					<li>Manufacturing Resource Planning (MRP)</li>
					<li>Sales Order Processing</li>
					<li>Customer Relations Management</li>
					<li> Human Resources / Payment</li>
					<li>Point-of-Sales (Retail)</li>
					<li>Document Management</li>
					<text>and much more... </text>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="text-block-area">
	<div class="">
		<div class="row m-1">
			<div class="col-sm-12 text-center mb-0 mt-3">
				<h2 class="m-0">How can Odoo help your business? </h2>
			</div>
			<div class="col-sm-12 m-4 text-left">
				<p>Odoo has designed tons of applications for all your business needs. For a simple way to run your business, use Odoo suite with over 25 open source business apps, which are comprehensive, fully integrated and easy to use</p>
				<ul>
					<li>Easily create your professional website</li>
					<li>Manage your relationship with Customers</li>
					<li>Design and launch your own marketing</li>
					<li>Enforce business workflow and company policies</li>
					<li>Take online payments using eCommerce</li>
					<li>Manage your warehouse and track inventory</li>
					<li>Manage contracts and create invoices with no efforts</li>
					<li>Issue documents for signatures online</li>
					<li>Manage your accounts and all financial activities in one place</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="text">
	<div class="container">
		<div class="row">
		<div class="col-sm-12 text-center"><h2>Explore Odoo's App's Features</h2></div>
		<div class="col-sm-12 text-center"><p>Click a link under each category below to explore a feature of Odoo Apps</p></div>
		</div>
	</div>
</section>

<section>
	<div class="container">
		<div class="row mb-5">
			<div class="col-md-2 text-center mr-1 ml-md-5">
				<img class="featureicon" src="./images/featureicons/websites.png" alt="websites" />
				<p>Build great user experience</p><hr />
				<Link to="https://www.odoo.com/page/website-builder">Website Builder</Link><hr />
				<Link to="https://www.odoo.com/page/open-source-ecommerce">eCommerce</Link><hr />
				<Link to="https://www.odoo.com/page/blog-engine">Blogs</Link><hr />
				<Link to="https://www.odoo.com/page/community-builder">Forum</Link><hr />
				<Link to="https://www.odoo.com/page/slides">Slides</Link>
			</div>
			<div class="col-md-2 text-center mr-1">
				<img class="featureicon" src="./images/featureicons/sales.png" alt="sales" />
				<p>Boost your succes rate</p><br /><hr />
				<Link to="https://www.odoo.com/page/sales">Sales</Link><hr />
				<Link to="https://www.odoo.com/page/crm">CRM</Link><hr />
				<Link to="https://www.odoo.com/page/billing">Invoicing</Link><hr />
				<Link to="https://www.odoo.com/page/point-of-sale-hardware">Point of sale</Link><hr />
				<Link to="https://www.odoo.com/page/subscriptions">Subscriptions</Link><hr />
				<Link to="https://www.odoo.com/page/sign">Sign</Link>
			</div>
			<div class="col-md-2 text-center mr-1">
				<img class="featureicon" src="./images/featureicons/operations.png" alt="operations" />
				<p>Integrate Business Functions</p><hr />
				<Link to="https://www.odoo.com/page/accounting/">Accounting</Link><hr />
				<Link to="https://www.odoo.com/page/project-management/">Project</Link><hr />
				<Link to="https://www.odoo.com/page/employees">HR Records</Link><hr />
				<Link to="https://www.odoo.com/page/recruitment">Recruitment</Link><hr />
				<Link to="https://www.odoo.com/page/appraisal">Appraisal</Link><hr />
				<Link to="https://www.odoo.com/page/leaves">Leave Mgt.</Link><hr />
				<Link to="https://www.odoo.com/page/helpdesk">Helpdesk</Link>
			</div>
			<div class="col-md-2 text-center mr-1">
				<img class="featureicon" id="supplychainimg" src="./images/featureicons/supply_chain.png" alt="supply chain" />
				<p>It's all about efficiency</p><br /><hr />
				<Link to="https://www.odoo.com/page/warehouse">Inventory</Link><hr />
				<Link to="https://www.odoo.com/page/purchase">Purchase</Link><hr />
				<Link to="https://www.odoo.com/page/mrp-cloud-software">MRP/BOM</Link><hr />
				<Link to="https://www.odoo.com/page/mrp-plm">PLM</Link><hr />
				<Link to="https://www.odoo.com/page/tpm-maintenance-software">Maintenance</Link><hr />
				<Link to="https://www.odoo.com/page/quality-management-software">Quality</Link>
			</div>
			<div class="col-md-2 text-center ">
				<img class="featureicon" src="./images/featureicons/productivity_tools.png" alt="productivity tools" />
				<p>Great tools = Happy people</p><hr />
				<Link to="https://www.odoo.com/page/discuss">Discuss</Link><hr />
				<Link to="https://www.odoo.com/page/discuss">Timesheet</Link><hr />
				<Link to="https://www.odoo.com/page/email-marketing">Email Marketing</Link><hr />
				<Link to="https://www.odoo.com/page/events">Events</Link><hr />
				<Link to="https://www.odoo.com/page/survey">Survey</Link><hr />
				<Link to="https://www.odoo.com/page/live-chat">Live Chat</Link>
			</div>
		</div><hr className="bluehr" />
	</div>
</section>

<section class="text mt-3">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2>One Experienced Integrator</h2>
				<h3 class="text-danger">MATT O'BELL EXPERIENCE AND DEEP KNOWLEDGE OF ODOO DELIVERS SUCCESSFUL ODOO PROJECTS</h3>
				<p>Odoo is a great software but the success of an Odoo Project (like other ERP projects) depends largely on the expertise and experience of the integrator. As a focused Odoo partner with a youthful team of highly knowledgeable consultants, we bring a deep knowledge of Odoo, experience in completing several Odoo projects for clients as well as project management skills, to steer all of our projects to successful completion. Our clients are able to realize an immediate value in implementing Odoo for their business.</p>
			</div>
			<div class="col-md-6">
				<img class="HPOL" src="./images/SiteImages/landingpic1.jpg" alt="" />
			</div>
		</div>
	</div>
</section>

<section class="text2">
	<div class="container">
		<h2 class="text-light text-center">Let the records speak for us</h2>
		<h3 class="text-center" style={{color:"#95a5a6"}}>ODOO IS GLOBAL AND WELL SUPPORTED BY A GROWING LIST OF EXPERTS</h3>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-6">

				<div class="row">				
						<div class="col-sm-2">
								<div class="circles text-light">
									<strong>P</strong>
								</div>
						</div>
						<div class="col-sm-10">
							<div class="float-right text-light">
								<h4>600+ Partners</h4>
								<p>Odoo leverages on 100s of partners to reach global markets. With experience in implementing Odoo projects, partners like Matt O’Bell bring competence and robust support to clients they work with in the local environment.</p>
							
						</div>
					</div>
					</div>
			</div>
			<div class="col-md-6">

				<div class="row">				
						<div class="col-sm-2">
								<div class="circles text-light">
									<strong>P</strong>
								</div>
						</div>
						<div class="col-sm-10">
							<div class="float-right text-light">
								<h4>120+ Countries</h4>
								<p>Odoo's over 2million users (including Toyota) across almost 200 countries is a proof of the value the software brings to businesses. The biggest Odoo client has 300,000 users and the smallest 1. <br />If your business is not currently using Odoo, we will be happy to bring you on board soon</p>
							
						</div>
					</div>
					</div>
			</div>
		</div>
	</div>
</section>

<hr />
<div id="footer1">
<div class="container" >
  <div class="row">
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">ABOUT US</h3>
        <Link to="/page/our-company"><li>Our Company</li></Link>
        <Link to="#"><li>Our Events</li></Link>
        <Link to="/jobs"><li>Join Us</li></Link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">SERVICES</h3>
        <Link to="/page/support-services"><li>Support Services</li></Link>
        <Link to="/page/business-improvements"><li>Business Process Improvements</li></Link>
        <Link to="/page/data-integration-and-migration"><li>Data Integration and Migration</li></Link>
        <Link to="#"><li>Business Analysis</li></Link>
        <Link to="#"><li>Project Management</li></Link>
        <Link to="#"><li>Odoo Hosted Services</li></Link>
        <Link to="/page/hardware-sales"><li>Hardware Sales</li></Link>
        <Link to="#"><li>Training</li></Link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">TRAINING</h3>
        <Link to="#"><li>Functional</li></Link>
        <Link to="#"><li>Technical</li></Link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">RESELLERS</h3>
        <Link to="/page/reseller"><li>Become A Reseller</li></Link>
        <Link to="#"><li>Reseller Open Days</li></Link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">VERTICALS</h3>
        <Link to="#"><li>OdooSME</li></Link>
        <Link to="#"><li>OdooSchool</li></Link>
        <Link to="#"><li>OdooUniversity</li></Link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul class="list-unstyled">
        <h3 class="footerheading">MEDIA</h3>
        <Link to="#"><li>Blog</li></Link>
      </ul>
    </div>
  </div>
  <div class="row text-center">
	<div class="col-md-12">
	<div>
    <h3 class="footerheading">CONTACT-US</h3>
    <ul class="list-unstyled m-0">
      <li class="footerheading">EMAIL : <Link to="mailto:marketing@mattobell.com?subject=enquiries">marketing@mattobell.com</Link></li>
      <li class="footerheading">PHONE :  <Link to="tel:+2347006366763">07006366763D</Link></li>
      <li class="footerheading"><span ><i class="fab fa-twitter"></i></span><Link to="#"> TwitterD</Link></li>
      <li class="footerheading"><span> <i class="fab fa-facebook"></i></span><Link to="#"> FacebookD</Link></li>
      <li class="footerheading"><span> <i class="fab fa-linkedin"></i></span><Link to="#"> TwitterD</Link></li>
      <li class="footerheading"><span><i class="fab fa-google-plus"></i> </span><Link to="#"> Google+D</Link></li>
    </ul>
	</div>
	</div>
  </div>
</div>
</div>
 </div>
         );
    }
}
 
export default homePage;