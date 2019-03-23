---
path: "/third-post"
date: "2018-07-22"
title: "اندر مزایای استفاده از تابع به عنوان children در React"
tags: ["this", "that"]
---

مدتی پیش قصد داشتم از [down shift](https://github.com/paypal/downshift) استفاده کنم که شکل رندر کردنش توجهم رو جلب کرد. به شکل جذابی میومد از متد‌هایی که داخل کامپوننت والد تعریف شده بود استفاده می‌کرد و اون رو به childrenهاش می‌رسوند. این شد که رفتم دنبالش ببینم چطور همچین چیزی رو نوشته و بعد از پیدا کردن جوابم (با استفاده از خوندن کد‌های این [پکیج](https://github.com/kentcdodds/react-toggled)) تصمیم گرفتم چیزی که یاد گرفتم رو به اشتراک بگذارم.<br />

<!-- excerpt -->

Lorem ipsum.
Lorem ipsum.
Lorem ipsum.
Lorem ipsum.
Lorem ipsum.

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
