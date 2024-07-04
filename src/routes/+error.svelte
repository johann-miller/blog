<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
  </script>
  
  <h1>{$page.status}: {$page.error.message}</h1>
  <p>404</p>
  <a href="{base}/">Go back home</a>