    <div class="ers-left-sidebar crm-production">
    <div class="navbar-header" style="width:100%;">
            <!--a href="/" class="navbar-brand"></a-->

            <a href="/" class="navbar-brand">
              <h3>myCRM</h3>
            </a>

    </div>
      <div class="content crm-content">
        <div class="ers-logo"></a></div>

          <!-- Start Metanavigation -->
          <nav id="ml-menu" class="menu">
            <div class="menu__wrap">
              @include('nav.sliding-metanav', array('items' => $SlidingMetanav->roots()))
            </div>
          </nav>  
          <!-- End Metanavigation -->
        </div>
          <div class="logout">
            <a>
              <i class="icon s7-power"></i><span>Logout</span>
            </a>
          </div>
      </div>