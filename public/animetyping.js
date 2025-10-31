(function () {
  if (typeof window === "undefined") return;

  /**
   * Pauses execution for a specified number of milliseconds.
   */
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  var elements = Array.prototype.slice.call(
    document.querySelectorAll(".typer")
  );
  if (!elements.length) return;
  // elements.forEach((element) => {
  //   typing(element, 100);
  // });

  /**
   * Types out the text content of an element at a specified speed.
   */
  async function typing(element, speed) {
    const text = element.textContent;
    element.textContent = "";
    let content = "";
    for (let i = 0; i < text.length; i++) {
      content = element.textContent.replace(/<span.*<\/span>/, ''); // حذف cursor قبلی اگر بود
      element.innerHTML = content + text[i] + '<span class="typer-cursor"></span>';
      await sleep(speed);
    }
    // پس از اتمام، cursor را حذف کن یا اگر دوست داشتی بگذار بماند
    element.innerHTML = element.textContent; // فقط متن باقی بماند
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typing(entry.target, 100);
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // یعنی اگر حداقل ۱۰٪ عنصر دیده شود
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
})();
