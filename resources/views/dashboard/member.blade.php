@extends('template')
@section('content')
<div class="ers-content ers-dashboard">

	<div class="ers-dashboard-content col-md-9">

	    <div class="row">
	    	<div class="user-card col-sm-6 col-md-6">
		    	<div class="col-md-6">
					<div class="panel user-panel panel-full-primary">
						<div class="panel-heading">
							<a href="/profile/edit"><i class="fa fa-pencil"></i></a>
						</div>
		                <div class="panel-body">
		                	<span class="pull-right"><a class="btn-xs btn btn-dark-primary" href="/profile/member">full profile</a></span>
		                  <h4>ERS National Delegate</h4>	
		                  <h3>Dr. Prof. Jane Doe</h3>
		                </div>
		             </div>
			    </div>
		    	<div class="col-md-6">
					<div class="panel officer-panel panel-full-alt1">
		                <div class="panel-heading">
		                <span class="icon s7-bell"></span>
		                <span class="title">ERS Officer</span>
		                <span class="sub-title">Notifications</span>
		                </div>
		                <div class="panel-body">
							<ul class="list-group">
								<li class="list-group-item"><span class="indicator"></span> Cras justo odio <span class="amount">2</span></li>
								<li class="list-group-item"><span class="indicator"></span> Dapibus ac facilisis in <span class="amount">4</span></li>
								<li class="list-group-item">Morbi leo risus</li>
								<li class="list-group-item"><span class="indicator"></span> Porta ac consectetur ac <span class="amount">1</span></li>
							</ul>
		                </div>
	              </div>
		    	</div>
	    	</div>

 	 
	    	@include('dashboard.cards.my-event-registrations')
			@include('dashboard.cards.reimbursment')
			@include('dashboard.cards.my-submissions')
			@include('dashboard.cards.my-applications')   	
			@include('dashboard.cards.open-elections')	 
			@include('dashboard.cards.call-for-candidates')	
			@include('dashboard.cards.cme-general')	    	   	
			@include('dashboard.cards.news-abstract-submission')
			@include('dashboard.cards.news-hermes')    	


	</div>

	</div>
	@include('newsfeed.newsfeed-api', array('class' => 'col-md-3'))

</div>
@stop()  

@section('scripts')
	<script src="../js/app-newsfeed.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
      	//initialize the javascript
		var options = {
			useEasing : true,
		};
		var CME = new CountUp("CME", 0, 78, 0, 2.5, options);
		CME.start();
        App.newsfeed();             
      });
    </script>
@stop()