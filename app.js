// class Budget {
//   constructor() {
//     this.budgetFeedback = document.querySelector('.budget-feedback');
//     this.expenseFeedback = document.querySelector('.expense-feedback');
//     this.budgetForm = document.getElementById('.budget-form');
//     this.budgetInput = document.getElementById('budget-input');
//     this.budgetAmount = document.getElementById('budget-amount');
//     this.expenseAmount = document.getElementById('expense-amount');
//     this.balance = document.getElementById('balance');
//     this.balanceAmount = document.getElementById('balance-amount');
//     this.expenseForm = document.getElementById('expense-form');
//     this.expenseInput = document.getElementById('expense-input');
//     this.amountInput = document.getElementById("amount-input");
//     this.expenseList = document.getElementById('expense-list');
//     this.itemList = [];
//     this.itemId = 0;
//   }

//   submitBudgetForm() {
//     let value = this.budgetInput.value;
//     if (value === '' || value < 0) {
//       //    this.budgetFeedback.classList.add('showItem');
//       this.budgetFeedback.classList.add('showItem')
//       this.budgetFeedback.innerHTML = `<p>value cannot  be empty or negative</p>`;
//       let self = this;
//       //    console.log(this)
//       setTimeout(function () {
//         self.budgetFeedback.classList.remove('showItem')
//       }, 3000)
//     }
//     else {
//       this.budgetAmount.textContent = value;
//       this.budgetInput.value = '';
//       this.showBalance();
//     }
//   }
//   showBalance() {
//     let expense = this.totalExpense();
//     let total = parseInt(this.budgetAmount.textContent) - expense;
//     this.balanceAmount.textContent = total;
//     if (total < 0) {
//       this.balance.classList.remove('showGreen', 'showBlack');
//       this.balance.classList.add('showRed');
//     }
//     else if (total > 0) {
//       this.balance.classList.remove('showRed', 'showBlack');
//       this.balance.classList.add('showGreen');
//     }
//     else if (total === 0) {
//       this.balance.classList.remove('showRed', 'showGreen');
//       this.balance.classList.add('showBlack');
//     }
//   }
//   submitExpenseForm() {
//     const expenseValue = this.expenseInput.value;
//     const amountValue = this.amountInput.value;
//     if (expenseValue === '' || amountValue === '' || amountValue < 0) {
//       this.expenseFeedback.classList.add('showItem');
//       this.expenseFeedback.innerHTML = `<p>values cannot be empty or negative</p>`
//       const self = this;
//       setTimeout(function () {
//         self.expenseFeedback.classList.remove('showItem')
//       }, 3000)
//     }
//     else {
//       let amount = parseInt(amountValue);
//       this.expenseInput.value = '';
//       this.amountInput.value = '';
//       let expense = {
//         id: this.itemId,
//         title: expenseValue,
//         amount: amount
//       }
//       this.itemId++;
//       this.itemList.push(expense);
//       this.addExpense(expense)
//       this.showBalance();
//     }
//   }
//   addExpense(expense) {
//     let div = document.createElement('div');
//     div.classList.add('expense')
//     div.innerHTML = `
//      <div class="expense-item d-flex justify-content-between align-items-baseline">
//      <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
//      <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
//      <div class="expense-icons list-item">
//       <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
//        <i class="fas fa-edit"></i>
//       </a>
//       <a href="#" class="delete-icon" data-id="${expense.id}">
//        <i class="fas fa-trash"></i>
//       </a>
//      </div>
//     </div>
//      `;

//     this.expenseList.appendChild(div);
//   }
//   totalExpense() {
//     let total = 0;
//     if (this.itemList.length > 0) {
//       total = this.itemList.reduce(function (accumulator, current) {
//         // console.log(`Total is ${accumulator} and the current value is ${current.amount}`);
//         accumulator += current.amount;
//         return accumulator;
//       }, 0)
//     }
//     this.expenseAmount.textContent = total;
//     return total;
//   }
//   editButton(element) {
//     let id = parseInt(element.dataset.id);
//     let parent = element.parentElement.parentElement.parentElement;
//     this.expenseList.removeChild(parent);
//     let expense = this.itemList.filter(function (item) {
//       return item.id === id;
//     })
//     this.expenseInput.value = expense[0].title;
//     this.amountInput.value = expense[0].amount;
//     let temporaryList = this.itemList.filter(function (item) {
//       return item.id !== id;
//     })

//     this.itemList = temporaryList;
//     this.showBalance();

//   }

//   deleteButton(element) {
//     let id = parseInt(element.dataset.id);
//     let parent = element.parentElement.parentElement.parentElement;

//     this.expenseList.removeChild(parent);

//     let temporaryList = this.itemList.filter(function (item) {
//       return item.id !== id;
//     })

//     this.itemList = temporaryList;
//     this.showBalance();

//   }
// }
// function eventListeners() {
//   let budgetForm = document.getElementById('budget-form');
//   let expenseForm = document.getElementById('expense-form');
//   let expenseList = document.getElementById('expense-list');

//   let budget = new Budget()

//   budgetForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     budget.submitBudgetForm()
//   })
//   expenseForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     budget.submitExpenseForm();

//   })
//   expenseList.addEventListener("click", function (event) {
//     console.log(event.target)
//     if (event.target.parentElement.classList.contains('edit-icon')) {
//       budget.editButton(event.target.parentElement)
//     } else if (event.target.parentElement.classList.contains('delete-icon')) {
//       budget.deleteButton(event.target.parentElement)

//     }
//   })
// }
// document.addEventListener('DOMContentLoaded', function () {
//   eventListeners();
// })



// --> Solved with jQuery 

        // |
        // |
        // v




$(document).ready(function(){

  let budget = 0;
  let balance = 0;
  let expenses = 0;
 let row = 0
    $('#budget-form').on("submit",function(e){
     e.preventDefault();
     let budgetInput = $('#budget-input').val();
     if(  budgetInput < 1 || budgetInput == "" || budgetInput == undefined || budgetInput == null){
       $('.budget-feedback').html(`
    Value cannot be empty or negative 
       `)
       $('.budget-feedback').show()
     }else{
     budget = budget + parseInt(budgetInput);
     balance = budget - expenses;
     $('#budget-amount').html(budget)
     $('#expense-amount').html(expenses)
     $('#balance-amount').html(balance)
     }
    });
  
    $('#budget-input').on('focus', function(){
      $('.budget-feedback').hide()
      $(this).val("")
    })

     $('#expense-form').on('submit',function(e){
       // ja stopirame formata da napravi submit
       e.preventDefault();
       // ja zemame vrednosta od amount input i ja parsirame vo integer
       let amountInput = $('#amount-input').val();
       let amountTitle = $("#expense-input").val()
       // na globalnite expenses i balance presmetuvame novi vrednosti 
       expenses = expenses + parseInt(amountInput);
       balance = budget - expenses;
       // Gi osvezhuvame spanovite so novite vrednosti 
       $('#expense-amount').html(expenses)
       $('#balance-amount').html(balance)

       if ( row < 1 ){
         $("#expensesTableDiv").html(
           `
           <table style="width:100%" id="exTable">
           <thead>
           <th>Expense title</th>
           <th>Expense amount </th>
           <th>Action</th>
           </thead>
           <tbody>
           <tr>
            <td>${amountTitle}</td>
            <td>${amountInput}</td>
            <td>
            <button class=" editButton btn btn-primary">Edit</button>
            <button class=" deleteButton btn btn-danger">Delete</button>
            </td>
           </tr>
           </tbody>
           </table>
           `

         );
         row++
               }else{
                 $('#exTable tbody').append(
                   `
                   <tr>
                   <td>${amountTitle}</td>
                   <td>${amountInput}</td>
                   <td>
                   
                   <button class=" editButton btn btn-primary">Edit</button>
            <button class=" deleteButton btn btn-danger">Delete</button>
            </td>
                   `
                 )
               }
     })

     $(document).on("click",".deleteButton", function(){
       // vo promenlivata tempEx ja postavuvame vrednosta na troshokot koj go brisheme so $(this) go oznachuvame
       // kliknatiot delete button, so parent go naogjame negoviot parent - vo ovoj sluchaj <td> tagot, so siblingsot() vo array
       // gi dobivame trite td koj se na isto nivo so td (pronajde so $(this).parent()) 
       // so $(this).parent().siblings().eq(1) ja odbirame vtorata kolona i so .text() ja zemame vrednosta.
       let tempEx = $(this).parent().siblings().eq(1).text();
       // pravime nova presmetka bez izbrishaniot troshok
       expenses = expenses - tempEx;
       balance = budget - expenses;
       // ja osvezhuvame vrednosta vo span-ovite
       $('#expense-amount').html(expenses)
       $('#balance-amount').html(balance)
       // da ja izbrisheme redicata od tabelite
       $(this).parent().parent().remove();
     });

     $(document).on('click', '.editButton', function(){
      let tempTitle = $(this).parent().siblings().eq(0).text();
      let tempEx = $(this).parent().siblings().eq(1).text();
      // ja popolnuvame expense formata - soodvetno dvata inputa
      $("#expense-input").val(tempTitle);
      $("#amount-input").val(parseInt(tempEx));
      // pravime nova presmetka bez izbrishaniot troshok
      expenses = expenses - tempEx;
      balance = budget - expenses;

       // ja osvezhuvame vrednosta vo span-ovite
       $('#expense-amount').html(expenses)
       $('#balance-amount').html(balance)
       $(this).parent().parent().remove();
       
     });
})