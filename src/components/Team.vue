<template>
    <div class="team">
            <div class="team__wrapper">
                <div class="team__header">
                    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="771 3722 60 60"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAGdElEQVRoQ+1bzXHcNhT+sJpJcpQriFRB5AokVSCpgoUO2vgWqwJZFVi+OauDwAoiV2C5gqwryKaC7DHZjIXMBwIMFiIJkAvYzkw4o5nVkADfh/fwfj48CnyG64WUR48aJxo4EMARgJUGFgJYTATevVXq4TOIYV4hSr7ohZR7nzTuLMjOV2ngYUfg/K1Sy5LyFAV8IeWB0HgPYJcaFcC9Fng3ARZ88SO1XWtdWpArLXB8q5S5X+oqouEALM32rEt7tIJHjV8AHBhTLwy6CODZVP5qASzWAsdKqVWfxqSUu9/U1nBA876t1PF/RsMzKU9Ra2y1FtiPgXXArKa5ULsTgeNSjiy7hmdTSbCnAG7mlbocoqnZVL4G8FIA6udKnQ8Zm/psCcC/AdjTAs+HOiAbvmjay3ml9lNBDHmuBGBNAeaVGjX3bCq3Gh8DP0qovkm3FXjb8V8C8B90PGNM2oYzOq7VvFLPYsKPuV9Cw7XTEricK3UzRKiZlK+gcQXgfl6psyFjU5/NDvhCSik07uh41gLPU8OSjcV0eLSO81ulVCqIIc9lB8yXz6bSeOoh4eXHqbyzaWYxD10sl/bCC6sT9ZfAZZemqdlvNV67nLpk0lEMMCf2TJv/LrXA9Q7w4HJqU0kBR6Les3t8qKQpO7MvYtJucptmMnsygHqu5aQuD4vXxUUBE6BxRoDUGidhXcxCAQLV38B9qnMb4qDani0OeFsBc4//H/CYFfUqpDHDY2OyJiFZNOzy35jkY++PLUSK7eFSCX+JebNqOKcmbMaWvVT8agHb3JqV1+jauqRJm9w5Z1ropaeLeaWej93/4bgsGr6YyvdMKkoAzs1iZgHcVDoC13OlXuXQhlcbDyYD+96fBfBMypfQYM6cLWY2sX0EkVAcsE/NDOGiuwTzHdZEYD/nmVMWDdsQ4ujZrdkKr7TM6rCy1sOeWQ+idkItW+2SyCO3vfXiFfHSTRmoYQQdQu2EApWmerKZNAUPqZ2hxyUeWOQMcf6iZgXMiX1qxx50X8eYDLtQ9PI8Mi1K9WQHbBxYfYJIqpaH4bw6nY93tMrnVhA4nyt1nyOWF0st2yYO2ciuwsJVRDF2M9cCFNGwL1ysxIvdzwXUzZMNMGlXeuhPwN4OsHT7Ngao6z73tZvrT2CRi+QbBZiZFR2M0PjBa0XyldEcho0FPJtKcyjnT0onyFYnLfCRfmHo+XNy4uGR5ieo+6w2BLFCud4rOp7KOZ6xgK23Z5fPrqi9d+s7ATywOyiV6u3VMF8KjWlLnxX7qRYQ+MA2pD6TGwu4LQP7DjhguxM0Dm0ICwl+0xrVdxD3BLAlzln9/BSsKgFWpj7t6aWiue8AK5fwjwVsrWo39i6jDI2pi+HO2iDwZg3chHt/A3DL0ciSICeA6qpY7JjDYC9n3cNu79KiumK06QJik9umoig/z6mbuN4Adh00zX4UuOwyDU6uNa503a0T7i2aO+ti08EzVsNWHs4fmq3p6hMCzOBaWxXt/mfm5mRrSAQDOAB7sxa47goDHhPhtpkByNVfAw/huLGA3eR2i9FsuW83F6CHYQkTH9dGJfyEP1aO+WBT8+RUkj6V4jXxWeOqcaQRWsnP7VmQCI9KifJRLjbGFibItAwxEMmYBhf6fmtFrKfL7x0hYEN2rwWexbKZRlsCZyUT/JR00gMc7fjxKKPVUMCmNdAK1LvXU4Qe84ztyWTIbOSItTj6HBkB152vCeygHciyj87DXSbY++0MY4D0jQkyvebdqcyKM2kT3jYK9sT+yCeO419p6/RS4ANrW9cMHiMA3HDOy98mm2L7ksZhW1qZ6jA5V4Dv3IUl1wHLjwKSG8pssD9ta2fIrWWjnbqj/j6VtvWIRdNNRMrJAA5NdcgK+sCaKopeua6kmPgz+BvqJuFa6PpzARYgHzVgcvahVVFogb7ph6klc2i2EZkMxa7qmy/tkRMWyjzSUuxw4RhumxbIJ8WDlza6jy84V/ORxtcGnrm8/VhkI82lVtvSz87y0EvGWYlsJA5W83RMCzqm1D2Vqqmu56xMhnywDs04Oe+KFjtJjIc9OyLwtmTeWAC986TuuPude480D28MoWfoS1jzchzpHcE/je8f699dJIDJ5bVAlbLXkwD7S+jFxC56Z1tF9o73aZ4xsX8w4DZpHIH3WNM/9HbGQ/Nn7Ku0cD7TnVePM57ai+ckBrf+cu0flpriRrSJ1wUAAAAASUVORK5CYII=" width="60" height="60" x="771" y="3722"/></svg>
                    <h2 class="header__title">Meet our team</h2>
                </div>

                <div class="team__items">
                    <div class="team_slider">
                        <div class="team_slider-card">
                            <ul class="team_slider-list">
                                <li class="team_slider-item">
                                    <div class="slide">
                                        <div class="slide_item">
                                            <div class="slide_item-person">
                                                <div class="slide_item-photo">
                                                    <img src="@/assets/team-slider1.jpeg" alt=" miguel " class="team__photo">
                                                </div>
                                                <h3 class="team__name ">Miguel Obrien</h3>
                                                <span class="team__skills ">Ceo & Founder</span>
                                                <div class=" team__wrap-social">
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-linkedin-in "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-google-plus-g "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-facebook-f "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-twitter "></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="team_slider-item">
                                 <div class="slide">
                                        <div class="slide_item">
                                            <div class="slide_item-person">
                                                <div class="slide_item-photo">
                                                    <img src="@/assets/team-slider2.jpeg" alt=" miguel " class="team__photo">
                                                </div>
                                                <h3 class="team__name ">Jackie Carroll</h3>
                                                <span class="team__skills ">Art Director</span>
                                                <div class=" team__wrap-social">
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-linkedin-in "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-google-plus-g "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-facebook-f "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-twitter "></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                 <li class="team_slider-item">
                                 <div class="slide">
                                        <div class="slide_item">
                                            <div class="slide_item-person">
                                                <div class="slide_item-photo">
                                                    <img src="@/assets/team-slider3.jpeg" alt=" miguel " class="team__photo">
                                                </div>
                                                <h3 class="team__name ">Jackie Carroll</h3>
                                                <span class="team__skills ">Designer</span>
                                                <div class=" team__wrap-social">
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-linkedin-in "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link ">
                                                        <i class="fab fa-google-plus-g "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-facebook-f "></i>
                                                    </a>
                                                    <a href="# " class="team__social-link">
                                                        <i class="fab fa-twitter "></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a class="team_slider-link" href="#" ></a>
                            <a class="team_slider-link" href="#" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
.team {
    background-color: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 800px;
    width: 100%;
    }

.team__header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
} 

.header__title{
    color:#665F60;
    text-transform: uppercase;
font-size:36px;
font-weight: bold;
margin-bottom: 170px;
}

.slide{
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}

.team__photo{
   width:240px;
   height: 240px;
   border-radius: 50%;
   border: 10px solid  #EBEBEB;
}

.team_slider-list li{
    list-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.team_slider-item{
    margin-right: 30px;
}

.team_slider-item:last-child{
    margin-right: 0;
}

.slide_item{
background-color: #fff;
color: #9F9ACF;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 350px;
height: 300px;
position: relative;
}

.slide_item-photo{
    position: absolute;
    top: -45%;
    left: 13.5%;
   
}

.team__name{
    font-size: 24px;
    text-transform: uppercase;
    color: #9F9ACF;
    font-weight: bold;
    padding: 125px 80px 0;
}

.team__skills {
 font-size: 24px;
       color:#665F60;
    font-style: italic;
    padding: 0 87px 0;
    margin-bottom: 50px;
}

.team__wrap-social{
background-color: #9F9ACF;
height: 70px;
width: 350px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

.team__social-link{
text-decoration: none;
width: 35px;
height: 35px;
background-color: #fff;
border-radius: 50%;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
color:  #9F9ACF;
}

.team__social-link:hover{
 text-decoration: none; 
   color: #9F9ACF;
   background-color: #362e7b;
}

</style>



<script>
export default {
  name: 'Team',
  props: {
    msg: String
  }
}
</script>