---
path: "/react-method-as-arguments-for-children"
date: "2018-02-02"
title: "اندر مزایای استفاده از تابع به عنوان children در React"
keywords: [برنامه‌نویسی، زبان برنامه‌نویسی، جاوا اسکریپت، جاوا‌اسکریپت، وانیلا جاوا‌اسکریپت، طراحی وب، رابط کاربری،آموزش، آموزش برنامه نویسی، javascript، ui، vanilla javascript، css، slide show، HTML، html ،play ground، ux]
tags: ["this", "that"]
image: 'react-func-fun.jpg'
---

مدتی پیش قصد داشتم از [down shift](https://github.com/paypal/downshift) استفاده کنم که شکل رندر کردنش توجهم رو جلب کرد. به شکل جذابی میومد از متد‌هایی که داخل کامپوننت والد تعریف شده بود استفاده می‌کرد و اون رو به childrenهاش می‌رسوند. این شد که رفتم دنبالش ببینم چطور همچین چیزی رو نوشته و بعد از پیدا کردن جوابم (با استفاده از خوندن کد‌های این [پکیج](https://github.com/kentcdodds/react-toggled)) تصمیم گرفتم چیزی که یاد گرفتم رو به اشتراک بگذارم.<br />

<!-- excerpt -->

قسمتی از کد:

```jsx
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
      <Parent>
        {
          ({ sayHello }) => 
            <div>
              <h2>Hello React </h2>
              <button onClick={sayHello}>click me!</button>
            </div>
        }
      </Parent>
      </div>
    );
  }
```

همینطور که میبینید داخل کامپوننت Parent به جای چیزی که معمول و متداوله، اومده از یک تابع استفاده کرده که از این طریق و با کمک [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) یک سری پراپرتی رو از کامپوننت Parent گرفته و به فرزاندانش رسونده.

## چگونه؟
خب چیزی که واضحه اینه که نوع childی که تابع Parent داره رندر میکنه یک 'تابع' است خب پس ما می‌تونیم به عنوان آرگومان هر چیزی که میخوایم بهش بدیم. اونم یک گام قبل ‌تر موقع تعریف کامپوننت ‌Parent.

```jsx
// Parent compoennt 
 state = {
    on: true
  };

  _sayHello() {
    console.log('Hello.~~~~😎');
    return 'hello'
  }

  sayHello = this._sayHello.bind(this);
  
  getParentHooks() {
    return {
      sayHello: this._sayHello,
      on: this.state.on
    }
  }

  render() {
    return this.props.children(this.getParentHooks())
  }
}
```

خوب ما مستقیما child کامپوننت Parent رو که یک تابع است صدا زدیم.  و یک آبجکت که شامل متد‌ها و state هایی که داخل کامپوننت قبلا تعریف کرده بودیم میشه رو به عنوان آرگومان بهش دادیم. خب طبیعیه که هر بار این تابع مقادیری props گون رو همیشه با خودش داره!‌ و ما میتونیم به راحتی و از طریق destructuring اونها رو بگیریم و ازشون استفاده کنیم.

## راه‌های دیگه

البته که هست استفاده از [clone element](https://reactjs.org/docs/react-api.html#cloneelement) یا [context](https://reactjs.org/docs/context.html) و یا تعریف یک سری اکشن با استفاده از ‌redux. اما برای خودم به شخصه این یک نمونه جالب‌تر بود یه جور حسه کاستوم کردن بهم داد که بتونم از تابعی مشابه Parent تو جاهای مختلفی استفاده کنم و اونم هر بار از یک سری متد‌ها و stateهاش.

## سخن آخر
امیدوارم که مفید بوده باشه. کد‌هایی که دیدین رو میتونید به شکل ‌live  از [اینجا](https://stackblitz.com/edit/react-frurd8yw9yge-children-as-a-function) اجرا کنید. 
