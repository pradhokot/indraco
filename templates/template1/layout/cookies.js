document.writeln(`
<div id="myCookies" class="cookies fixed-bottom text-white" style="background-color: rgba(28, 28, 28, .75); backdrop-filter: blur(1rem);">
   <div class="container-fluid py-4">
      <div class="row justify-content-xl-center gx-xl-5">
         <div class="col col-12 col-md col-xl-auto">
            <p>
               This website uses cookies to analyze traffic and improve user experience. By continuing to use the site, you consent to our use of <a href="#" target="_blank" class="text-reset">cookies</a>.
            </p>
         </div><!-- end col -->
         <div class="col col-12 col-md-auto">
            <button class="btn btn-light w-100" id="trigger-cookies">
               ACCEPT
            </button>
         </div><!-- end col -->
      </div><!-- end row -->
   </div><!-- end container -->
</div><!-- end cookies -->`)