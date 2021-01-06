<template>
<div class="сontacts" id="сontacts">
      <div class="сontacts__header">
                   <svg width="42" height="60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="779 4542 42 60"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA8CAYAAAAQTCjdAAAEwklEQVRoQ9Va7XUUMQyUOoAOSAWQCiAVQCqAVACpAFIBoQKSCkgqIFRAqIB0QDoQbxZp0fn8Ie3ekYf/wHG39ng0GslemFYMEXlGRC+I6CkRPSGiR0SEf8O4JaJ7Irojoh9EdMPM+LdFg7NPiQgAvSWiNwosMwVAXxHRJ2bG38MjDFQBfiSiV252MHZDRN+UQWJmfCYRAdMYYPi5Mg/GbVwQ0VkUcAioiHwgovduEbByycz4MzxEBJt8XWwWYDF/d3SBKotfnO7A1kmUhdbKOu9nZdn0fNybtwlUE+Wr6hAhBsAUgyOWlGEAhiSwxlEr4apAC5DI1O5uR4B63xdRa4LdAloBiV1igr0NEQGjiB4Srwp2A2jxAJjcO0jb/WjtEijs553u6mDfTJYhUhl8V82eM/Op/WYGqiHHjzCgyZ0mTlQ3mmBwGoxDSy4PFBqBSV8x83F04n38TkQAFJ6LsnuENSagWkUAFAMhT5U3ff6lJoNVJHgudH5t1Sq6KZXAT8+qAYWXoXZfMPNJckJv3K1H04VCRDYwGdBfKuBZEyOwlYIATV9bzVd2wTIIwOgaeiWxYFXImXtmfsxOvHfMfDACqFLBJFa1ugUhaui1dUUE4Ue3dgSg1nBs2EEPsIhY4oW8tvDIOUFGpLjwnwGoLYpajtarO1wEEMqw1xYeiUIytYMDQiAbaPUGQKEDhDL6sIk8HAEDIyJWUEJJ69zoFkBl8inmaG9qugknngMK60IEM/nwB98CoKmNVbI59fyM738Cah4aqkgikvZcF/oNbwwkE6wJUrv3WR9NJqvDp8x8PlrMf++sMNRPOIeZst4yMZTFImKWgX4ACRVqqtVLwQ6a5KgV/sXmUN8y82GEIVcxQjaj1cxsLZPxZp3HYBQ7hO4wojo1m8EzKBKQQZVZnR/MWM2PSsz0OVmnNSWmu9AZWxkyCeAjZHCm/ePUImolwoZwH4BFMUIh1+ettE96NqCz7qKNiU4GIAipAWkpB+ABclg2nUNYYZlOG77DN9tJHUM0tHYDYk2zrQdgl3pqCCWdEoD5EOWpxZsqk9uBUR3ubiKJt+Q3rlGapeiBzuL1h6olC615pjhkzsldHpcXHUnWAKv0AlUMJVDPasiqdgyyuX7tSufBWC0PdJ6EGtAH0WpLmwa2dZtnrP4zB3CZXi3LLaCe1VDJW6PVyAVI7yLXOpdws7IUrDu3NTu4HlA0K6m2bAlQ1zZ2T7WjO3yrVqmjcRRw0aN2G/HhydP1nqHGOgpSa7rJa9ijRoD63jN9RG4BL+xomLBDoLrzrfvKDHO13zo7Cp2fokBhV3ZlnT7UVeo5rt8RdmgfURrex4aAFh33qsTKJFC3hPZC6vwuFK5GyE1GKX8OM6qs2gUCPqZOAkXnjo+pxEwBLS1lxbk+fIjsNiWD8KNiIbGQYGFvdS1c6uJiMVBl1Xvr0AOLpmP4+xpR6dDbJO4qqMtQkeXhCJRg1wD1Emi6gHu5tSjkq0LvWPUS2HKB1uvCJVVtMaMObLXDKkKezvKdhd5P5ArBfHTxr3iit4Q9plcz6gqBvSCzV9dWy5v//SIjgZ0AVbDWaPj1VzcwO0mmSldkdRxfLe4HduqjjYbDzln4OvxWLyKB3z+9+xI41JaVAAAAAElFTkSuQmCC" width="42" height="60" x="779" y="4542"/></svg>
                    <h2 class="header__title">Meet our team</h2>
                </div>
              <form action="POST" class="form">
               <input class="form__input form__input--name" type="text" id="name" required>
               <label class="form__star form__star--name">Your Name <span style="color: #000">&#42;</span></label>
               <input class="form__input form__input--email" type="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                <label class="form__star form__star--email">Your Email <span style="color: #000">&#42;</span></label>
               <textarea class="form__text" name="message" id="message" cols="30" rows="7"></textarea>
                <label class="form__star form__star--text">Your Message <span style="color: #000">&#42;</span></label>
                <button type="submit" class="form__btn">Send message</button>
            </form>
        <a href="#" class="location__btn"></a>
        <div class="location__address">
            <div class="location__wrap-icon">
               <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="1279 4733 38 36"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAADyElEQVRYR+2Yya+fYxTHP19qHmJjYUEIsZDQlSkxVTSGEGPaUtpQVTUlFmyEBbFhIUHMQ8xDjKGGEKKIVjeG2Agh/ANEUDV85Vvnlfe+9723v9z7/u7qnuS3uPeX3/N8nu85zznnOWIAs70H8ADwJ3ClpF9mu6xmu4DtvYDHgONqrfXASkk/2d4buB7YB/intVf23Qy8ImldH8OswGzvCTwBHAucXRu8DHwILK+/bwIOKTDX/6LsucBdkq4ZFMz2LsCzwAnAEklvZwPbJwPPA+8DyyRttr1Dbd6AbQ98BGyQdPVgYLZ3Bx4HTqrN32gvbvu0gn4XuFDSb53vA/Yx8OlgilWgPwwsBs6X9FbfiW2fAjwDvAOsal+IUjCKbRwEzPbOpdSpwFJJE5TqApZyzwFvAivi1nJ3XDsMWEEl0AO1XNKro9xo22cCTxXcRa2Y+yxwktbMOMZs7wo8CGSTkaGaDVtwOcxq4Pda7ytJd8wIrJQKVNJBYuq1UZTqcesZFXNJJ4HbLpdYUiAn2bR5zPZOQAL9HCBueHEmUC3lkrsSDi9VzLWT7oSlpwRrKZXFErgvzAaqBXdeXaAccnVzIbpr94KVUvfEdZWHcsLBzHY88GS59gpJf2wTzPaOwL3ABVXzksUHN9tLqsY+DayVtKW9yQTFbC8A7o9KwMWS8qOxme0c/tFSb42kv5rN/gcrpe5OPJVSSYxjN9tLS7mUuKsa5baCVUwln6wCLpGUhDhnZjudyCOVAa5NzKkK8u3ApflISm8152Z7JfBQfa4LWBLe6VVoI2cUTPO3pdsVDE1rezdggaSfa9+EUfLmuoAlrjY1SpVbQ75eUjL+2Mz2WuAIIIG/9VbaTjgtnJTHqgH8vNretMVjM9u3Valb2PXOVGAbgNcl3TA2qv/UubXC6KhuzZwRWKWWg4G8jqazvJa+7ibP5gfjANs/rgYOALJ594Dp7QP9HXCWpO/76McBdhDwHnBnvYjShbQttS8vp7yATpT0zVyBHVi9fLqOtMiTzPYx1UUslvTtXIPlmuex0QeWx0rq7jxYrnnjynnFokae/tMm2HnF2leqFNtYtTKTmr4bt18NTS7fxq28D1gk6Ycp1rk5CRg4ctSS9AmQ5/+NQDOpadb+uzJ+ZhaXScrgpA8+A5cM8zLDSAXIIKVtGUXdAmQAc/SoYB8A+wJfAnmctC1gKTeHV1bPuKkPbFFVh01VtrpgaXMOBX4Ejh8FLA+SZcBhQEpNM9Pqwv2abnMaN8Xd6YrTDHahslbqa0rXFxlZtR8i+fJfwQsbiO9czO0AAAAASUVORK5CYII=" width="38" height="36" x="1279" y="4733"/></svg>
            </div>  
            <a href="#" target="_blank" class="location__text">Ikan Piranha Atas 220C<br>Malang - East Java<br>Indonesia</a>  
        </div>
        <div class="location__tel">
            <div class="location__wrap-icon location__wrap-icon--light">
                <svg width="20" height="34" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="1547 4824 20 34"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAB2klEQVRIS+2WTUtWURSFnyWVff2ChAr7GkgqCDYQ+gNBgwbOHGgRgeMa5Sib9Av8QkGaNApCaNI0CEEkB4JiEkZCA7GoCIraseQeOV7uq9xs+J7ZvXftZ5+9z+GuLYCIuAPcA0740e9qrBZgC5iUNKuIGAaeAI+AJeBIDZilv4BrwANg2MAPwGNJYzVBe+QRcR+4a+BXoEvSelJExHVgoMhelcdlTkuaz2IuAYsGfgY6JH3MPnYBtwFV9NTvfgMTkpazmDPAcgKOApvZVtwXB+23vMtjmcDAhwno3X0HLNpNegDQO03rD3AKaEvAPmClBKxzRgZeAV4nYI+kd3UIZW1EXAAWErBX0uohgZeB+Sbw37sYEc0eNu9h3QvUvDb8999Xp6SNugeR6yPirH09/Q8HgfeHAQLngZkE/Ab8aOAp9gsbmJeNKDey3KQ8xpxOwJvAWgPxycKjHTxVJC4X46QXgRcJ2C2psuSI8NzjhN7ZM0kjVa2JCJf81kCX61PenQJKzX5ZDFAeorYl3WoA7AFeGfgG2JDU30DYDowDP4EhSZ8qLLQVeO4qDLwKzAFf7KtFYD4VGJQ/Hy1NDO5xL3AcuLEjjAjPJb4650rB5bEkB+fffKBPJW3+BfAZQTXkHIn4AAAAAElFTkSuQmCC" width="20" height="34" x="1547" y="4824"/></svg>
            </div>
            <a href="tel:+6281235966914" target="_blank" class="location__text">Tel: +6281235966914</a>
        </div>
             </div>   

</template>



<style scoped>
   .сontacts{
     background-color: #9F9ACF;
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 900px;
    width: 100%;
   }

.сontacts__header{
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    color: #000;
    font-size: 36px;
    font-weight: bold;
}

</style>

<script>
export default {
  name: 'Contacts',
  props: {
    msg: String
  }
}
</script>