@extends('template')
@section('content')
<div class="ers-content ers-dashboard">

	<div class="ers-dashboard-content col-md-9">
	    <div class="row">

	    	<div class="user-card col-sm-6 col-md-3">
		    	<div class="col-md-12">
					<div class="panel user-panel panel-full-primary">
						<div class="panel-heading">
							<a href="/profile/edit"><i class="fa fa-pencil"></i></a>
						</div>
		                <div class="panel-body">
		                	<span class="pull-right"><a class="btn-xs btn btn-dark-primary" href="/profile/member">full profile</a></span>	
		                	<div class="clearfix"></div>
		                  <h3>Dr. Prof. Jane Doe</h3>
		                </div>
		             </div>
			    </div>
	    	</div>



			@include('dashboard.cards.become-a-member')
			@include('dashboard.cards.my-event-registrations')
			@include('dashboard.cards.reimbursment')
			@include('dashboard.cards.my-applications')
			@include('dashboard.cards.my-submissions')
			@include('dashboard.cards.congress-cme')
			@include('dashboard.cards.cme-general')
			@include('dashboard.cards.news-abstract-submission')




	</div>

	</div>
	@include('newsfeed.newsfeed', array('class' => 'col-md-3'))

</div>
@stop()  

@section('scripts')
@stop()