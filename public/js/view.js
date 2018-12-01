$(document).ready(function() {
  $('[data-toggle="popover"]').popover();

  // SMALL BOX: Creates $4 column
  function createSmBox4() {
    let smBox4 = $(".smBox4");
    // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox4.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox4.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/4products", function(products) {
        initializeRows(products);
      });
    }

    // MIGHT NEED THIS...
    // This function starts updating a product in the database if a user hits the "Enter Key"
    // While in edit mode
    // function finishEdit(event) {
    //   var updatedProduct = $(this).data("product");
    //   if (event.which === 13) {
    //     updatedProduct.title = $(this).children("input").val().trim();
    //     $(this).blur();
    //     updateProduct(updatedProduct);
    //   }
    // }

    // This function updates a product in our database
    function updateProduct(product) {
      $.ajax({
        method: "PUT",
        url: "/api/products",
        data: product
      }).then(getProducts);
    }

  //   // Constructs a product-item row
  //   function createNewRow(product) {
  //     var $newInputRow = $(
  //       `<input type="radio" name="4" id="${product.product_ID}" 
  //     value="${product.product_ID}">
  //     <label for="${product.product_ID}">
  //     <a href="#" data-toggle="popover" title="${product.title}">
  //     <img src="${product.imageURL}" margin="2%" width="175" height="175">
  //     </img></a></label></input>`
  //     );
  //     $newInputRow.data("product", product);
  //     return $newInputRow;
  //   }
  // }

   // Constructs a product-item row
   function createNewRow(product) {
    var $newInputRow = $(
      `<ul><li><input type="radio" name="4" id="${product.product_ID}" 
    value="${product.product_ID}">
    <label for="${product.product_ID}">
    <a href="#" data-toggle="popover" title="${product.title}">
    <img src="${product.imageURL}" width="175" height="175">
    </img></a></label></input><div class="check"></div></li>
    </ul>`
    );
    $newInputRow.data("product", product);
    return $newInputRow;
  }
}

  // SMALL CUSTOM BOX: Creates $5 column
  function createSmBox5() {
    let smBox5 = $(".smBox5");
    // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox5.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox5.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/5products", function(products) {
        initializeRows(products);
      });
    }

    // MIGHT NEED THIS...
    // This function starts updating a product in the database if a user hits the "Enter Key"
    // While in edit mode
    // function finishEdit(event) {
    //   var updatedProduct = $(this).data("product");
    //   if (event.which === 13) {
    //     updatedProduct.title = $(this).children("input").val().trim();
    //     $(this).blur();
    //     updateProduct(updatedProduct);
    //   }
    // }

    // This function updates a product in our database
    function updateProduct(product) {
      $.ajax({
        method: "PUT",
        url: "/api/products",
        data: product
      }).then(getProducts);
    }

    // Constructs a product-item row
    function createNewRow(product) {
      var $newInputRow = $(
        `<ul><li><input type="radio" name="5" id="${product.product_ID}" 
        value="${product.product_ID}">
        <label for="${product.product_ID}">
        <a href="#" data-toggle="popover" title="${product.title}">
        <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL BOX: Creates $8 column
  function createSmBox8() {
    let smBox8 = $(".smBox8");
    // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox8.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox8.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/8products", function(products) {
        initializeRows(products);
      });
    }

    // MIGHT NEED THIS...
    // This function starts updating a product in the database if a user hits the "Enter Key"
    // While in edit mode
    // function finishEdit(event) {
    //   var updatedProduct = $(this).data("product");
    //   if (event.which === 13) {
    //     updatedProduct.title = $(this).children("input").val().trim();
    //     $(this).blur();
    //     updateProduct(updatedProduct);
    //   }
    // }

    // This function updates a product in our database
    function updateProduct(product) {
      $.ajax({
        method: "PUT",
        url: "/api/products",
        data: product
      }).then(getProducts);
    }

    // Constructs a product-item row
    function createNewRow(product) {
      var $newInputRow = $(
        `<ul><li><input type="radio" name="8" id="${product.product_ID}" 
        value="${product.product_ID}">
        <label for="${product.product_ID}">
        <a href="#" data-toggle="popover" title="${product.title}">
        <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  // SMALL CUSTOM BOX: Creates $14 column
  function createSmBox14() {
    let smBox14 = $(".smBox14");
    // Get products from database when page loads

    getProducts();

    // Resets the products displayed with new products from the database
    function initializeRows(products) {
      smBox14.empty();
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(products[i]));
      }
      smBox14.prepend(rowsToAdd);
    }

    // Grabs products from the database and updates the view
    function getProducts() {
      $.get("/api/14products", function(products) {
        initializeRows(products);
      });
    }

    // MIGHT NEED THIS...
    // This function starts updating a product in the database if a user hits the "Enter Key"
    // While in edit mode
    // function finishEdit(event) {
    //   var updatedProduct = $(this).data("product");
    //   if (event.which === 13) {
    //     updatedProduct.title = $(this).children("input").val().trim();
    //     $(this).blur();
    //     updateProduct(updatedProduct);
    //   }
    // }

    // This function updates a product in our database
    function updateProduct(product) {
      $.ajax({
        method: "PUT",
        url: "/api/products",
        data: product
      }).then(getProducts);
    }

    // Constructs a product-item row
    function createNewRow(product) {
      var $newInputRow = $(
        `<ul><li><input type="radio" name="14" id="${product.product_ID}" 
        value="${product.product_ID}">
        <label for="${product.product_ID}">
        <a href="#" data-toggle="popover" title="${product.title}">
        <img src="${product.imageURL}" width="175" height="175">
        </img></a></label></input><div class="check"></div></li>
        </ul>`
      );
      $newInputRow.data("product", product);
      return $newInputRow;
    }
  }

  createSmBox4();
  createSmBox5();
  createSmBox8();
  createSmBox14();

  let form = document.querySelector("#smBoxForm");

  form.addEventListener(
    "submit",
    function(event) {
      let data = new FormData(form);
      // let output = "";

      for (const entry of data) {
        // output = entry[0] + " = " + entry[1] + "\r";
        for (var i = 0; i < entry.length; i++) {
          console.log(entry);
        }
      }
      event.preventDefault();
    },
    false
  );
});
