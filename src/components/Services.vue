<template>
    <div class="services" id="service">
            <div class="service__list-wraper ">
                <div class="service__item service__item--dark">
                    <svg class="service__icon" width="47" height="61" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="382 1968 47 61"><image xlink:href="data:image/png;base64,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" width="47" height="61" x="382" y="1968"/></svg>
                    <h4 class="service__title">GRAPHIC DESIGN</h4>
                    <p class="service__subtitle">Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
                <div class="service__item">
                    <svg class="service__icon" width="50" height="61" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="379 2353 50 61"><image xlink:href="data:image/png;base64,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" width="50" height="61" x="379" y="2353"/></svg>
                    <h4 class="service__title">SEO & MARKETING</h4>
                    <p class="service__subtitle">Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
            </div>

            <div class="service__list-wraper ">
                <div class="service__item">
                    <svg class="service__icon" width="58" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="756 1968 58 59"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAACaklEQVRoQ+2asWtTURTGf+e+vLa2IOJScdDBQVAEJ0d1dBXdCr7n4HMS/C8cnawSQgJtN/8CBRUKuiudXFyEqlVEWiupyT3yJElDTZqkTZNrOZlC3n2533fO+b57h0+yJH0IXFCI6PBxEHl4H29O359/Or/Rac04f8tupQ8ELnnBdcIhgqCsSJak2g9Q5+uzTxYXv/SzdpRrsiTNiz/Ta88WUUVvOlgTkVZltO421PlnwPHQiaqXa1Gk1XbCdZEt8foKmNjuaL12sri0tLqzMlmSfgJmQyfK5MRMsVjc7ID/FzDVN1GF18DvXiMyyudO8SpcIfeXYREdJYE97TU0osJ1rcv3KFLZE5ADeEm9r6q4F8CRoXX08GhUeYNIVdnumKA1kMu5awVPFJYVfPvgNDR8FXC5GX0ATgO7jeSPWP2ZRwsL3w5gAvf1l1mSrgDneuBflTRNj02pnkckrqmuO+R5fm6KcAPVr0C85dy7SqWSf+/rcrEv5AO+fG9u7uhWoXAxP/8b5+ZLYLJ5rnrvpR7Hb//pYvPc9HHhRKlU+jzgvmNfniXpT2B6pzkZUevo2IdzdwA2ut0u8Ta6NrphVMA0ahq1m1EYWuyGwjRqGjWNmkaDqICZkZmRmVEQUuwKwjRqGjWNmkaDqICZkZmRmVEQUrQLg5mRmZGZkZlREBUwM7qbpBWUU3netT1XRCN3BJrneNdqkbtdLpfXg2hbG4g7SfpYkLN5Pqo9V0Qjd5TndUX5aHndvGiW1w1oflsJ7GGlOy2vG0p3h9VRLK873pYOrlHL6/7t2OHK63YaQlWN/pe8bif8zbzuH+66SLhs8k6NAAAAAElFTkSuQmCC" width="58" height="59" x="756" y="1968"/></svg>
                    <h4 class="service__title">WEB DEVELOPMENT</h4>
                    <p class="service__subtitle">Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
                <div class="service__item service__item--dark">
                    <svg class="service__icon" width="36" height="61" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="767 2352 36 61"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA9CAYAAADF2cvLAAAEIklEQVRoQ+2aT2wUZRjGf890W5oSrWJIqsYIRsRQ/4SDhpPe1IMeN9Gou7NipyJ/YiMkghSogCESBF0xdNu6MyUcTDx48IAmxkTDRaIHE/TgnwpqrAcUtSLdduc1w782mjIzdUs4zHfa7Pt9z/e8z/fMN8n7jpg2ni4U7nKkLkN3SMgMmx5v5G8HmhCnCfmg3pI7NDg4+EuErwubeIXSGmTbgfbp/zeSxAxYUdK/Ca3vD6rVs4S8YnEd6FUi1nAY8VYIo0jNc0VIcEZ1loD1IO4GfjfxjDzX7cXIA3di7J7XflVvuVyuzRWRf+P25POtf7W17QGtknhfXtH9DFgOOlzPOauGhoaOXy4yF/Z52nVXOMYQsDQiFEaeEertD6o7Ye6MfIlE1e26b5jxbETo3JMkeiq+v2+mRd2F0hMm6zIYVyrSahacgnBffxB8PBO+V3BfQvQmJuQVSzvAXpz9cdr6ShDsaRihlStXLmiq2TKcerukegpizQrDH5vb278sl8vjiQlJrOv3/XKKjRo61Su4WxHbpo4MfQV8DczZ3TNTBiaryawTdOs0Qg1NeNZgFwnJGJAsCOGaWaPNcqHMfg2ltUKPTSf0/PW3LNp37Nixi++3WeKnXtbZ2Wk/jYz0CW1O/Nin3iXlgtT3UEr81NMzQnGSZQplCsUpEBfPPJQpFKdAXDzzUKZQnAJx8cxDmUJxCsTFMw9lCsUpEBfPPJQpFKdAXDzzUKZQnAJx8SvfQya8Ad8fiMtkruJdxdJGYS9PlfTgk1AcJbz8VVhJNbD7gHuu3Cos8K6w9wzn6nTHEtYwZ0xQDx3LyWw+OC1pMKJeiGGPAg9cVMjQhlOnx/Z2dHTkkoJFfTXPdZfKrBDi3AjhCYF/w+LFIydPnkxcgB8dHZ1c0Na23dDGKULGcwPD/mtJyUTzukulZRbaLuBBIFLlb4x3sPrmysGDJ1JhFUt9hm35X2Xh893IrcDnwBGwh0E3CVvdHwRRQy7x6P4PIWxNJQj2J0YAugru6xJrEX0V39/mFdwhxFMY2yrDfl8aLM91d2JsklcsToByGLsqw/6mNB1Fz3U3YLwC/GDwrWAZ0CqT1z9cfTspIdd1W+cZgwaPq6vofiS4FxhzLHzkwPDwp0mBSqXSwpbQ9kZAF9YYtqN1cnJ3+dChP5LieK6bx6iAjanrydL9cuwF4CHgqIP1HAiCI4nBPK/ZOXNmeSgtxHF+rlSrkZ8Sj/Ot0y1wtmVeVT6fb7p2/vwlMqoGKzCOI74w43s5/GnnevkzD7OJKCicFiOsCUcmu+TVIdOkYR0O3Gbnjvk64MOmJseb+rLBdW/HbDVoTeL0GjNxHOxNYH8lCCIfTo2or5qbmFgaOs7NgkUy5Yyw8d9/SI5CaubwnerOyHhT+I3v+6ciJv8AnY2IHYKa3a0AAAAASUVORK5CYII=" width="36" height="61" x="767" y="2352"/></svg>
                    <h4 class="service__title">MOBILE DEVELOPMENT</h4>
                    <p class="service__subtitle">Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
            </div>

            <div class="service__item service__item--big">
                <svg class="service__icon" width="62" height="60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="1150 1985 62 60"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA8CAYAAAA+CQlPAAALs0lEQVRoQ8WbB6wtVRWG/2XvvfcSY2/R2HsviAVFEOQpIoo0RcCCok+qBgt2sCCIXVGjxoaKBTsqUWIJEAkKdnyiPgV1mW9c/8k+c+bc+7jcGXdyMufMnbL/vVf917qhkUdmXknSTSRdQtKFkv4p6YI68p1zjP/UNVx3yfpcWtKl6jxHf/g71/GJ+hgJz+HzrzryfD68c1NEcOxuGm1k5lUl7ShpH0k3q4kOvS+bxfAkmTjf/918DIpncI/nz9GL4EXxezh/WUl/l/QWScdFxKbRgGcmE3iGpIMkXUXSOTXRy0hiJ5kM3/kAor9jloIWON8Nnnv6C+HNBCyLfvV66F/rfedJeqmkY8cEfl1J75L0WEmvlnSEJF6cEcGEZyMzmQcLcLmBRUG8WUQWy2rgHQa8P14UH7eX9HxJv5W0UdId6/cXJe0/CvDMZIJ3kXSMpBtJekpEfHk0nRp4cGYeLelZkl4VERsz8zGS3inpapI2jAWcXeJFb5SEmO0YET+aCnhmXr+k7RGSto2IEzLzrgWcnd91LOCI7U6SDpX0Q1Y+In41IfAbSnpzqdn2EfGxzOTckZKeKOmQsYCjqxskHSzp+5J2iYhfTwj8xiVtj5K0XUR8MjOvV+eeLOmwKYCfUjs+JXDiBnb3kZKeI+lLkq6AvkvC6B06FnBe8vRyZQaOO5tkZCYxA55kW0l/Kh9++XJxxAdHjgkcUWeFv1eiPgNe7gs/jvVvAxF+My5whLWWlcrMW5R9AfifK0rEHfLBlb53TOAEL/hPgGPczjWIzCSg6VyNJEJawDt8/V0nihHvXgvoLqTLvGXFDXiWF0h6vyR2HNBEg5vHBP7MAv6d2vEW+DUk7UYgUYEL4keQwnzOwihGxPEXE/jrJD0YlcO49Z81FnBWF+Ds6Lc7vxmxVMdL9PEEuEFigM0RQWy9plE7DvCHSto5Ij48FXBAAJw4/VuSnjuxO0PH31A7DvCPTAWcndu5/DjAd5s4gMGqv0nSg0iUCGCmBP7s2vFvSNo9Is4ektvGwjtLQ9SdhNgSo/9OVpyr8xtDdU5E/LGX9NxU0lsL+E5TAr+ipJdI2hfXIenF/ck1Fh6xJKZHHyEJTBw4H8cSOzV1JsbtLA7Xor+vj4jNzTOJ3N4h6f6SnjalccNdYVzw5QdKek1EMPmFkZm3K318uKTzy+VwXZt78x3QZlWc1nL+E+X+8NfdqLj8PZLuK+mpEfGpqUQd34yO7SDpZSxCRDDpwVFprEkJi3dLM1m8ud9BDkeu/YOkcyPCFBbAicvfJ+k+kp4UEZ+dCjghK7EyGdor2NGI+EftBiJ65fLbnqx5s5Y/a7k300n29SwK0R0+f0iKriMJS35PSVtHxBemAo4ff1vt+Mu72Lh0sKK2t1ey4PkgstZvjkN8m6km01Rcc1BEfLQPKjOvKemEAv64iIB1mRtjBTDoOEbnYfjwjuMqUcxMeDCYEKIqRLXl21oqie82amZNfQ4QLBD5/vEDVBbvIFq7e+34iVMBv7YkDApsx+MjYuHF7USKmDQJ6eiNRbFut3Sy9ZwdP6u15o1xg176jCRYF0R9MuCIGgbltpIQtZOaSVnH0WF2kt/eaVPE5syt01xj8Og3wwtEDnBeu+uZCXDef+d6P/n4JKLOjvPiW9eKf6UBjuEj8yJltKq1Ot76cYt6342xUCwE53Fbx0QEeXc3yo58vgjPrSJiMuC3kfTx4rWhek6OiE6XazeY7ANq8t3pmrP9c8uZt6Dtz/13Fu4D8GsRQTpr4K3EIeqzhfc1Yxk3qGWsKruHLz/FwPsiV4uB+KLTFl+OLZdu18blFnsSIa5B1Pt+HN0mPseFwvD+YCpRv1/txKaioE61DlZsjh/3opuB8e82QDFgx++O18+PiN8MLWItJP4br0I0R/TI+1vvMU7tLDPh24jcYF+eJ+n0RtRxdej4Ns3E7bftwzki1pzvl424jVx9V6jrvisr4LgxgMPpM5cf968bS9T3Kh/76WJZzm6AX6sM0r2a8LON2KzHBmzf7WSFIzQV1NV3lwDn2ej+30rVxgeemYgjYep+BBeSDogI6ldLR93T6rjLwxbtfkkY23HmEOjacYoGR0mC0mbHTxtd1KseTjl2u8rHj2jidIwWURU73NWpG4ve1/E2Pjdw+3kXEJEkMrq5kZmUpWF/8Cz7tUTnaFY9M0kQyIWpW8FwHsVql1EjoMCVcWxHX8fZUc61rgwRtxtjAdDzAyMCdZqNigKpksL3kajsGxFkcHNjXXW8wN286Nw7tblwpZ6cgwsjonNUNjfvJoprY/VWzw0e4mEjBcEecNwcC35AGTh2fI6h4foxgN+hWBd4L6ImqKcVR+l42yjQ6rvz8rY2zrwdq88ittJvgpfXwrxIIjNE1RZIkPUGzi4SkZF9AWSbiIBXn2xkJg0JVEq3lrR3RJACL4z1Bs5OYVHh0LCoRE0/nQz1/0JiCoaAfYikPSKCTRgdOFnRnkU0fo5KZUT8fmLg5AkESNgRJG6wE2O9dxzmBZJxF0mvjIhDpgRdOo7HYJfZeVpQvrbFO14WGMIOmhbxdWLgmBldbo2jc2o6jahHQ/IdXmQAVrjf3+Y2rm6uTQTn5/O81qiRby+4pD6gmjesD7QXz4VhpUy9uqhnJkbpgSWuZDm2oA7y22DfEmPXhCvhfg+CFIKW1YZzcPe4kVU5dMV/Yydwgycto6lrt3k/1pza+JlVRRm0MQuinpn3hgeXRIb1y6peuq7sfLnNm71rrn7gZtxUxyKYPuJ766baSI3rAco5Jg89zaA9jMXDUuMdCFgWGFOvahEQe1chA759L5r5Vt3xzERHCf7RTUo+BAJ0K7FrLR1kMTdl1DbdOeJydjWLwFYoKphvwzhSeqIJ7yeV4Pylys30s6C7+0cEC7IwMvMGNXc4gMMqwJnrqfNNczteNxLjwofjC0kw1lyuXU2+B3QUg0Qj4BMq0Tm8wl0SDVzkGSW+LMoQ8FtVzYwKCvU6+uwGRx840Ra6hA98YUQQc082MvNulVXRp7bB7GhmonbMBXUhNvjmEuDYJHw4C8h1C1zbsh3nBoBTxyK4J7WbbDRNeJCVO0TE13l5nQc4ngZAM9a20W9U0cETsTnl4QXKaRlw3BciDtn//9hxuDqCD4DTmNfF+ZlJcsN5gHO+W5B2FIlJYoJd+lDNfyk91Rd1+k7xgcTbxLmkkJONzKQAcZwkUlt8sIGzIMdWHyoNezQb9IEjrVyDK94d1VipUNkHjm5BIiDqL5J09Eo3r/eKZCYkIcCx8gDsEpzMvL2kD5YkEIaePAAcwBgzeHsitgWpaO/pA4f9pB5F9AVZSPfRoOtYb9AFkPYsWr2pgqKjP6vzSCLk4T2qkWiuFazIB7wBBARFxH2WdWAs03FWC+CdqJDPLutkGAk4vpodPw2X2k4+M5kTYTC7TWDyi8awIaHMFxXB+M2RE0Nz7e84RoUg4dHVuENdmwBikpGZNPVjV/DX9MCR2hJUEb1h4EiAAMc10Erw5swZchNmFXITxmWpUVu247AXWEREag++RwRU7ugjMwlnIQmxLXDvJCVdM0EBJ2mB1vKgDRzeHODMG0kg/96ivvj+jtOIQ0mVB1HUO3GlpGA9V6PibLoo6C5GyogYmZ/5dUJfzvEbn01Mz98JScnAaDc5dUvn1AEvkpBkgnILRuLnVeWcFeK29IFrvS4ziR3oOSU6g5o+vZKafhtIm9w4U4RmvkiEB7wvPDfd+xgWGnXIqbGgtGmR2fj/vpxlOTd3zatNV13tcL7dtnX4/834m5lS1onz5NAkFYgyFZA9xzaqAKfLGIvognsnBDUh89ptf5kBc51LP2ZAncHxt7aov5IgmDrm+q9WTeyMZVWStUpU/z6Ab1V9Kuy0d6IF2v5bU1ufNuvS1r0slm7jaNs62nzcC+RFRHcxqvzn0KzOtl4gV3Vnpe/svCfctlG2/87oCTsP7+fe/L5wpZq4J1P2hYXSxWnOv6iL9F+O47jyJe1yFAAAAABJRU5ErkJggg==" width="62" height="60" x="1150" y="1985"/></svg>
                                      <h4 class="service__title service__title--big">OUR SERVICES</h4>
                <blockquote class="service__subtitle service__subtitle--big">“Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.”</blockquote>
                <cite> - Borat -</cite>
            </div>
            </div>
        
</template>

<style scoped>
        .services {
            background-color: #EBEBEB;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            height: 800px;
            width: 100%;
            padding-top: 90px;
        }
        
        .service__item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 380px;
            height: 400px;
            flex-direction: column;
            padding: 0 50px;
        }
        
        .service__list-wraper {
            height: 100%;
        }
        
        .service__item--dark {
            background-color: #DBDBDB;
        }
        
        .service__item--big {
            height: 100%;
            background-image: url(../assets/servic-bg.jpeg);
            background-position: center;
        }
        
        .service__title {
            color: #665F60;
            font-size: 24px;
            font-weight: bold;
        }
        
        .service__subtitle {
            color: #665F60;
            font-size: 18px;
            font-style: italic;
            text-align: center;
        }
        
        .service__title--big {
            color: #FEFCFD;
        }
        
        .service__subtitle--big {
            color: #FEFCFD;
        }
        
        .service__item:hover {
            color: #9F9ACF;
            border-color: #9F9ACF;
            background-color: rgba(201, 195, 255, 0.7);
        }
        
        .service__item--big:hover {
            background-image: none;
            color: #9F9ACF;
            border-color: #9F9ACF;
            background-color: rgba(201, 195, 255, 0.7);
        }

</style>

<script>
export default {
  name: 'Services',
  props: {
    msg: String
  }
}
</script>