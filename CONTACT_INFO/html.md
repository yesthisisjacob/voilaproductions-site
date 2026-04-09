# Photography Contact Form - HTML Structure

This file contains the semantic HTML5 structure for a photography booking contact form. It is designed to be compatible with static site hosting (GitHub Pages) and third-party form processors.

## Code

```html
<section class="form-wrapper">
  <form action="[https://formspree.io/f/YOUR_UNIQUE_ID](https://formspree.io/f/YOUR_UNIQUE_ID)" method="POST" id="contact-form">
    
    <div class="input-field">
      <label for="name">Your name</label>
      <input type="text" id="name" name="name" placeholder="John Smith" required autocomplete="name">
    </div>

    <div class="input-field">
      <label for="email">Your email</label>
      <input type="email" id="email" name="email" placeholder="john@example.com" required autocomplete="email">
    </div>

    <div class="input-field">
      <span class="label-text">Gender</span>
      <div class="options-row">
        <label><input type="radio" name="gender" value="Woman"> Woman</label>
        <label><input type="radio" name="gender" value="Man"> Man</label>
        <label><input type="radio" name="gender" value="Fitness"> Fitness</label>
        <label><input type="radio" name="gender" value="Group"> Group</label>
      </div>
    </div>

    <div class="input-field">
      <span class="label-text">Shoot purpose</span>
      <div class="options-list">
        <label><input type="radio" name="purpose" value="Portfolio / Personal"> Portfolio / Personal</label>
        <label><input type="radio" name="purpose" value="Brand / Product"> Brand / Product</label>
        <label><input type="radio" name="purpose" value="Swimwear"> Swimwear</label>
        <label><input type="radio" name="purpose" value="Fitness"> Fitness</label>
        <label><input type="radio" name="purpose" value="Event"> Event</label>
        <label><input type="radio" name="purpose" value="Other"> Other</label>
      </div>
    </div>

    <div class="input-field">
      <label for="budget">Budget (optional)</label>
      <input type="text" id="budget" name="budget" placeholder="$300 / $500 / $1,000+">
    </div>

    <div class="input-field">
      <label for="message">Your message (optional)</label>
      <textarea id="message" name="message" rows="5" placeholder="Share the concept, location, date range, and any reference links (Instagram, Pinterest, etc.)."></textarea>
    </div>

    <div class="submit-wrapper">
      <button type="submit">Submit</button>
    </div>
  </form>
</section>
