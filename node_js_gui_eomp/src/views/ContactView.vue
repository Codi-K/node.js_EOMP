<template>
    <div>
        <div id="contact_page">

            <div id="get_in_touch">
                <img id="contact_us_logo" src="https://i.postimg.cc/WbmPRgn2/STELLAR-removebg-preview.png" alt="logo">
                <h3>keenofourie@gmail.com</h3>
                <h3>codikader7@gmail.com</h3>
                <p id="get_in_touch_form_text">Get in touch with us using our email addresses or drop a few words in the following form.</p>
            </div>


            <div id="contact_form">

                <h2 id="form_heading">Get in touch with us...</h2>

                <form action="https://formspree.io/f/xnqkdzqw" method="POST">
                    <div class="mb-3" id="form_position">
                        <label for="exampleInputName" class="form-label">Name:</label>
                        <input type="name" class="form-control" id="exampleInputNameame" placeholder="Name..." name="name" required oninvalid="this.setCustomValidity('Please Enter Your Name😢')" oninput="this.setCustomValidity('')">
                    </div>
                    
                    <div class="mb-3" id="form_position">
                        <label for="exampleInputSurname" class="form-label">Surname:</label>
                        <input type="surname" class="form-control" id="exampleInputSurname" placeholder="Surname..." name="surname" required oninvalid="this.setCustomValidity('Please Enter Your Surname😢')" oninput="this.setCustomValidity('')">
                    </div>
                    
                    <div class="mb-3" id="form_position">
                      <label for="exampleInputEmail1" class="form-label">Email Address:</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="We'll never share your email..." name="email" required oninvalid="this.setCustomValidity('Please Enter Your Email Address😢')" oninput="this.setCustomValidity('')">
                    </div>

                    <div class="mb-3" id="form_position">
                      <label for="exampleInputComment" class="form-label">Comments/Problems:</label>
                      <input type="comment" class="form-control" id="exampleInputComment" placeholder="Comments..." name="comments_or_problems" required oninvalid="this.setCustomValidity('Please Insert Your Comment Or Problem😢')" oninput="this.setCustomValidity('')">
                    </div>
                
                    <button type="submit" class="btn" id="form_submit_button">Submit</button>
                  </form>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

input {
    width: 20rem;
  }
  
  label {
    width: 10rem;
    text-align: left;
  }
  
</style>