const client = Rapid.createClient('')


console.log("index.js loaded");

$("#newStickyBtn").click(function (){
    $("#openFade").toggleClass("hidden");
});

client
  .collection('notes-3')
  .subscribe((messages, changes) => {
    changes.added.forEach(message => {
        // console.log(message.body.title);
         $('#todo').append('<div class="stickyItem" id=' + message.id + '>' +
        '<div class="stickyTitle">' + message.body.title + '</div>' + 
        '<div class="stickyBody">' + message.body.body + '</div>' +
//        '<input type="checkbox" id="doneBox" name="done" value="bool">' + 'Done' +
        '</div>');
        //  $('#log').append('<div class="stickyItem" id=' + message.id + '>' +
        // '<div class="stickyTitle">' + message.body.title + '</div>' + 
        // '<div class="stickyBody">' + message.body.body + '</div>' +
//        '<input type="checkbox" id="doneBox" name="done" value="Done">' + 'done' + 
        // '</div>');
    });
  });
  
$("body").click(function() {
// $(document).ready(function () {
$('.stickyItem').click(function() {
    var x = this.childNodes[0].innerHTML;
    var y = this.childNodes[1].innerHTML;
    $("#current_sticky").toggleClass("hidden");
    console.log(x);
    console.log(y);
    $(".stickyDeetsTitle").remove();
    $(".stickyDeetsBody").remove();
    $(".stickyChat").remove();
    $("#stickyExit").remove();
    $(".doneBox").remove();
    $("#input").remove();
    $("#current_sticky").append(
    '<div class="stickyDeetsTitle">' + x + '</div>' +
    '<button id="stickyExit">' + '</button>' +
    '<div class="stickyDeetsBody">' + y + '</div>' +
    '<div class="stickyChat">' + '</div>' +
    '<div class="doneBox">' +
    '<form class="check" id="checker">' + '<input type="checkBox" name="done" value="bool">' + ' DONE' + '</form>' +
    '<form class="check" id="checker">' + '<input type="checkBox" name="del" value="bool">' + ' DEL' + '</form>' + '</div>' +
    '<input type="text" id="input" placeholder="Type message..." />'
    );
    $('#input').keyup(e => {
        if (e.which === 13) {
            client
              .collection(this.id)
              .newDocument()
              .mutate({ text: $('#input').val() })
                $('#input').val('')
    }});
           // $(".stickyChat").children().remove();
    const temp = client
    .collection(this.id)
    .subscribe((messages, changes) => {
        changes.added.forEach(message => {
            console.log(message.body.text);
            $('.stickyChat').append($('<div>').text(message.body.text))
    });});
    
    $('#stickyExit').click(function () {
        // $(".stickyChat").children().remove();
        $('#current_sticky').addClass("hidden");
        temp.unsubscribe();
 });
});
});


// function    populateChat(input) {
//     client
//         .collection('Bk6rypcLZ')
//         .newDocument()
//         .mutate({ text: input})
// }


// $("body").click(function () {
//     $(".stickyItem").click(function () {
//         console.log(this.id);
//         $("#current_sticky").toggleClass("hidden");
        
//         // var temp = this.childNodes[0].text();
//       // console.log(this);
//         // populate left side info
        
//         // console.log(this.childNodes[0].innerHTML);
//         // console.log(this.childNodes[1].innerHTML);
        
//         // $('#stickyDeetsTitle').text(this.childNodes[0].innerHTML);
//         // $('#stickyDeetsBody').text(this.childNodes[1].innerHTML);
        
//         // <div class="stickyDeetsTitle"></div>
//         // <div class="stickyDeetsBody"></div>
//         // <div class="stickyChat"></div>
//         // <div class="doneBox">
//         // <form class ="check" id="checker">
//         // <input type="checkbox" name="done" value="bool">
//         // </form>DONE<BR>
//         // </div>
// });});


// populate right side chatbox
// cl1ient
// .collection(this.id)
//  .subscribe((messages, changes) => {
// changes.added.forEach(message => {
// console.log("clicked dicky dicks");
// console.log(messages.id);
// console.log($(this).parent.message.id);
// })
// })
// })
// })

function    openMenu(menuName) {
    if (menuName == 1) {
        var x = document.getElementById('log');
        x.style.display = "none";
        var y = document.getElementById('todo');
        y.style.display = "";
    }
    else if (menuName == 2) {
        var x = document.getElementById('todo');
        x.style.display = "none";
        var y = document.getElementById('log');
        y.style.display = "";
    }
}

// $("#submitBtn").click(function () {
//     console.log("fucking clicks");
//     $("input[type='text']").value = "blahs";
// })

function  sticky_create() {
    $("#openFade").toggleClass("hidden");
    console.log($('#textT').val());
    console.log($('#textB').val());
    console.log('shit not broken');
    client
        .collection('notes-3')
        .newDocument()
        .mutate({
            title: $('#textT').val(),
            status: false,
            body: $('#textB').val()
        });
    $("#textT").val("Title");
    $("#textB").val("Message");
}

// $("#todo").click(e => {
//     console.log("fucking activate my click");
//     load_todo();
// })

// function load_todo() {
//     client
//   .collection('notes-2')
//   .subscribe((messages, changes) => {
//     changes.added.forEach(message => {
//       $('#todo').prepend($('<div>').text(message.id));
//     })
//   })
// }

// function newSticky() {
    
//     console.log("NEW STICKY\n");
    
//     $("#corkboard").prepend("lol\n");
    
//     client2
//         .collection('notes')
//         .newDocument()
//         .mutate({
//             title: 'test',
//             status: false,
//             body: 'testing'
//         })
//         .then(
//             () => console.log('create success'),
//             err => {
//                 if (err) {
//                     switch (err.type) {
//                         case 'timeout': break
//                         case 'permissions-issue': break
//                     }
//                 }
//             })
    
    
    
    // $('#corkboard').append("<div id=' 
    // // insert custom id 
    // ' class="sticky"><div class="stickyTitle">
    //       // insert thing from collection corresponding to id
    //       </div>
    //       <div class="stickyBody">
    //         // insert thing from collection corresponding to id
    //       </div>
    //       <form class ="check" action="javascript:check_done();">
    //           <input type="checkbox" name="done" value="bool"> Done<br>
    //       </form>
    //     </div>
    //     ")
// function openMenu(menuName)
// {
    
//     client
//   .collection('notes-2')
//   .subscribe((messages, changes) => {
//     changes.added.forEach(message => {
//       $('#todo').prepend($('<div>').text(message.id));
      
//     // var i;
//     // var x = document.getElementsByClassName('sticky');
//     // for (i = 0; i < x.length; i++)
//     //   x[i].style.display = "none";  
//     // document.getElementById(menuName).style.display = "";  
// })
// })
// }
