<template>
<div class="header" id="header">
            <div class="nav" id="fixedNav" >
                <div class="nav__logo">
                    <a href="/" class="nav__logo-link" title="Digitalproduct">
                        <svg class="nav__logo-svg" width="55" height="73" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0.355 0 54.29 73" fill=" #FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="73" viewBox="2.004 1 53.547 72"><path paint-order="stroke fill markers" fill-rule="evenodd" d="M31.714 53.981c-.508 5.558-1.54 10.445-3.419 14.717-.623 1.416-1.756 2.767-2.279 4.302h-.228v-1.132c.428-.665.219-1.575.456-2.49 1.128-4.358 1.213-10.171-.684-13.812-3.24-6.221-9.728-4.128-16.181-6.793-2.528-1.043-4.385-3.19-5.698-5.434L2.313 39.49c-.716-2.705-.062-6.199.684-8.15 3.107-8.132 10.872-11.71 20.284-7.246v-.68c-.807-1.095-.545-2.732-.912-4.3-.985-4.22-1.744-18.068 2.963-18.114 1.277.926 3.73.885 3.875 2.943-.376.405-.398.569-.456 1.359h.228v-.227c.98-1.03 1.25-3.37 2.963-3.622 1.368 1.22 3.683 1.463 4.102 3.622-1.142 1.446-2.269 3.974-2.735 5.887h.456c1.428-1.877 7.312-7.25 10.028-6.793.804 1.292 1.634 2.569 2.051 4.303-1.435.51-2.095 1.895-3.19 2.717-4 3-7.232 7.374-9.8 11.773h.683c1.569-1.22 7.973-1.811 10.712-1.132 7.222 1.792 9.252 4.27 10.94 11.547.234 1.011.543 3.392.227 4.755-2.183 9.442-6.79 14.21-16.41 16.302-2.57.559-5.133-.337-7.292-.453z"/></svg></svg>
                    </a>
                </div>
                <ul class="nav__links-list">
                    <li class="nav__link-item"><a href="#" class="nav__link">Home</a></li>
                    <li class="nav__link-item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__link-item"><a href="#service" class="nav__link">Services</a></li>
                    <li class="nav__link-item"> <a href="#works" class="nav__link">Works</a></li>
                    <li class="nav__link-item"><a href="#contact" class="nav__link">Contact</a></li>
                </ul>
            </div>

            <h1 class="header__title">CreativE DIGITAL Project</h1>
            <p class="header__subtitle">Duis mollis, est non commodo luctus,<br> nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </div>
   </template>

<script>
    window.onscroll = function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('fixedNav').style.backgroundColor = scrolled == 0 ? "rgba(1201, 195, 255,0)" : "rgba(201, 195, 255, 0.7)";
}
</script>

<style lang="scss">
.header {
    background-image: url(../assets/header-bg.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 1070px;
    width: 100%;
}
.nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 330px;
    position: fixed;
    top: 30px;
    padding: 10px 0;
    overflow: visible;
    z-index: 1;
}

.nav__link {
    text-decoration: none;
    text-transform: uppercase;
    color: #FFFFFF;
    font-size: 24px;
}

.nav__link:hover {
    text-decoration: none;
    border-bottom: 4px solid #9F9ACF;
    color: #9F9ACF;
}

.nav__logo-svg:hover {
    fill: #9F9ACF;
}

.nav__link:focus {
    text-decoration: none;
    border-top: 4px solid #9F9ACF;
    color: #9F9ACF;
}

.nav__link-item {
    list-style: none;
    display: inline-flex;
    margin-right: 30px;
}

.nav__link:last-child {
    margin-right: 0;
}

.nav__links-list {
    margin-top: 20px;
    list-style: none;
    display: inline-flex;
}

.header__title {
    text-transform: uppercase;
    color: #FEFEFB;
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 40px;
}

.header__subtitle {
    color: #FEFDFD;
    font-size: 30px;
    font-style: italic;
    text-align: center;
}

</style>

