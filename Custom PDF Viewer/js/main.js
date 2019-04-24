const url = "../docs/pdf.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null,
  scale = 0.5;

const canvas = document.querySelector("#pdf-render"),
  ctx = canvas.getContext("2d");

// render page
const renderPage = num => {
  pageIsRendering = true;

  //get page
  pdfDoc.getPage(num).then(page => {
    //set scale of pdf
    console.log("Page Loaded");
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };
    page.render(renderCtx).promise.then(() => {
      console.log("Page Rendered");
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
        console.log(pageNumIsPending);
      }
    });
    //output current page
    document.querySelector("#page-num").textContent = num;
  });
};

//check for pages rendered
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// show previous page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

const fullPage = () => {
    if (scale === .5) {
        scale = 1.5;
        queueRenderPage(pageNum);
    } else {
        scale = .5;
        queueRenderPage(pageNum);
    }
  
};

pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);
    document.querySelector("#page-count").textContent = pdfDoc.numPages;
    renderPage(pageNum);
  })
  .catch(err => {
    //display error
    const div = document.createElement("div");
    div.className = "error";
    div.appendChild(document.createTextNode(err.message));
    document.querySelector("body").insertBefore(div, canvas);
    document.querySelector(".top-bar").style.display = "none";
  });

//   button events
document.querySelector("#prev-page").addEventListener("click", showPrevPage);
document.querySelector("#next-page").addEventListener("click", showNextPage);
document.querySelector("#full").addEventListener("click", fullPage);

