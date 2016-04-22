var setEditor = {

  init: function (Args) {
    var editor = ace.edit(Args[0]);
    editor.setTheme("ace/theme/clouds_midnight");
    //editor.setValue(); // or session.setValue
    editor.getSession().setMode("ace/mode/" + Args[1]);
    editor.getSession().setUseWrapMode(true);
  }
};
