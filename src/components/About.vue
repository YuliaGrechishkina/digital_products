<template>
   <div class="about" id="about">
            <div class="about__img">
                <svg class="about__icon" width="50" height="54" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="380 1269 50 54"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA2CAYAAACFrsqnAAAEUklEQVRoQ+2a71kUQQzGkw6kA6lA6UAqUCtQKlAqUCoQKhAqUCoQK1ArkA6kg/j87knuyQ63tzOzu/eJ+YIcczN5kzd/R5UVlpm9EZGXIvJCRJ75Fb9F5I+I3Knq/dLX6lIHmhkCfxSRD0n4seO/i8iVqt4tdf8iQNwCXxMANI6wWIB/AxILvfafIf+liFyo6sNcQLOBmNkXtwSyQJ/zfZo2s+ci8klE3ifKnc4FMwuImWGFEOhSVc9rNVtYEQXMAtMNxMwAABDWmape14KIfWYG3X449QgCp61nxP4uIE6PXy4AHP/cK0ABBlriN82rFwhafOWhtFuLyTJEO3wNpz/u8ZdmIGYGAICwuLQqJ0DFffQzs1BOk691Uys5+LWqntVwwKn4d58vJQV1WaXJIp70/nVYI7SN9U7GqGNmgCU8NwePViCUHt/IF6p6MmUNB05k43uxRi1pZuEr1dbuopaZEZ1IZpM89vDMXjQMXS7cobl7p6AewYiG96p6PKWo/PdWiwRFKD8IuySy7XJBCAbUWwBgQae37C1yD2cQbgfBwsyML6lqk2xNm80MbZHE8gow5edY4cqtt62lCjCcw/dzrYUiWGT66qKyFchGW1DDeR8legBDIC6/pWjc49SAhnbZd0omrQ8km93DJlSo1l5I7MGgtCSJkc/WByIiRz3Zt8Z5U2JcFUg4e9MlNQCSlSKXNN3R6iMBpDlh1YI5VNSqziO1ghfhO+q41fNI90U1wFK3uW5mRxgzo9Yi7DZxuBJI+AcJlIRZvZp8xIFEe9ustX1SpUT5oKpH1Qh8Yw8QSg8015x9J4CENbo6zmYghVWqquAp7aZitKsX4fxeIPgIGuTnLIr5NIXWgNXsG6GkLiBulehN+LULjJc3gJitkG4gDiaPhIgyJMqqqWFqojhq1iiom1pFEstgdpbuxX4sSb8S5TqVNH1JlQLG/G2WReLQ1Nnle6iGf6YPmMwj/KD0b22gVgXiNItehUapLM3z/WE1+pHmTvBgQNCwj3/QfrS73A8AwvWmb+ktDg8KZCpvPAHZo6GlnH07Rq113qDWnCSYcXUDcT8gjBJOt77QAQR54oWL57iqWXJpnCYgPiyIPJAjE44c74KDWdcYGzxkv/OHohyS+T5jpNEpzK4zq4B4PcT7X7xOxVkIf9PaO5SC+PmAKsdDJMvbmvNHgSSNDajjA7Ubr69mZeMdgLAMygJUtvgk9R4B8QYH7pfUQTtov4o6NSF4354J6tGzDDrILZCxyXmtaecKPgEKVpTUGxSpGyAOglFPWIHJORP3RakzF2z6Twmb8sZpvnkNDiDxVo7g/OEg9OkFVjygbp44oi5avAfvFbL2e4/eMtMsaXZzUyvEUvsG75lpaNzdLy8lWOs5qd+/h1rRR6w2YW8VsGX/th1Yui9oEWKJvU9AltDikmc8soi//S15x6HO2kxjsrMf6uJV7gFIzJdWueBQh/4HOc9CDxW6nt8AAAAASUVORK5CYII=" width="50" height="54" x="380" y="1269"/></svg>
                <h2 class="about__title">About us</h2>
            </div>
            <div class="about__content">
                <div class="about__text">
                    <p>Nullam quis risus eget urna <span class="bold_text">mollis ornare </span>vel eu leo. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor.
                    </p>
                    <p>
                        <span class="bold_text">Morbi leo risus </span>, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet <span class="italic_text">fermentum</span>. Sed posuere consectetur est at lobortis.
                    </p>
                </div>
                <a href="#" class="about__btn">Learn More</a>
            </div>
        </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
    background-color: #EBEBEB;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 800px;
    width: 100%;
    
}

.about__img {
    background-image: url(../assets/about-us-bg.png);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 560px;
    width: 380px;
}

.about__icon {
    margin-bottom: 30px;
    margin-top: 130px;
}

.about__content {
    width: 635px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about__text {
    color: #665F60;
    font-size: 20px;
    margin-bottom: 40px;
}

.bold_text {
    font-weight: bold;
}

.italic_text {
    font-style: italic;
}

.about__btn {
    text-decoration: none;
    color: #7D7A7C;
    font-style: italic;
    width: 95px;
    height: 25px;
    border: 1px solid #7D7A7C;
    padding: 12px;
    text-align: center;
}

.about__btn:hover {
    background-color: #7D7A7C;
    color: #FEFBFC;
}

 .about__img:hover {
            background-image: none;
            color: #9F9ACF;
            border-color: #9F9ACF;
            background-color: rgba(201, 195, 255, 0.7);
        }

</style>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>