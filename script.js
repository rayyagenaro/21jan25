var bpmnViewer = new BpmnJS({
  container: "#diagram",
});

let dataJson = null;

document.addEventListener("DOMContentLoaded", function () {
  fetch("vms.json")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Mengonversi respons ke objek JavaScript
    })
    .then(function (data) {
      dataJson = data;
    })
    // .then((data) => {
    //   dataJson = data;
    // })
    .catch((error) => {
      // console.error("Error fetching the JSON file:", error);
      dataJson = null;
    })
    .finally(() => {
      bpmnViewer.importXML(qrDiagram).then(function () {
        var canvas = bpmnViewer.get("diagram"),
          overlays = bpmnViewer.get("overlays");

        // Zoom to fit full viewport
        canvas.zoom("fit-viewport");

        // Add Colors
        document.addEventListener;

        var shape = CustomElementRegistry.get("Activity_1444sng");

        var $overlayHtml = $('<div class="highlight-overlay">').css({
          width: shape.width,
          height: shape.height,
        });

        overlays.add("Activity_1444sng", {
          position: {
            top: 0,
            left: 0,
          },
          html: $overlayHtml,
        });

        overlays.add("Activity_0kfyw1i", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 11113 ' + dataJson.in_progress + " </div>",
        });

        overlays.add("Activity_0k10xkn", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_0qkc533", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_1mhe83c", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_019j69b", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_1444sng", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_14k1qr1", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_1lwv1cd", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_1ohe82d", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_16dw91q", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_0egmwhs", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_15iiq2a", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_136cno8", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_0hzulev", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_1qk238x", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_18uzooa", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        overlays.add("Activity_0nmr3cx", "note", {
          position: { bottom: 120, right: 50 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> 3 </div>',
        });

        // Tambah Status
        overlays.add("Activity_1mhe83c", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: DRAFT ' + dataJson.draft + " </div>",
        });

        overlays.add("Activity_019j69b", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: COMPLETE ' + dataJson.complete + "  </div>",
        });

        overlays.add("Activity_1444sng", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: APPLIED ' + dataJson.applied + "  </div>",
        });

        overlays.add("Activity_14k1qr1", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: IN PROGRESS ' + dataJson.in_progress + " </div>",
        });

        overlays.add("Activity_1lwv1cd", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: INCOMPLETE ' + dataJson.incomplete + "  </div>",
        });

        overlays.add("Activity_1ohe82d", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: MANUAL VERIFICATION ' + dataJson.manual_verif + " </div>",
        });

        overlays.add("Activity_16dw91q", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: WAITING APPROVAL ' + dataJson.waiting_approval + "  </div>",
        });

        overlays.add("Activity_0egmwhs", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: WAITING APPROVAL ' + dataJson.waiting_approval + " </div>",
        });

        overlays.add("Activity_15iiq2a", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: WAITING APPROVAL ' + dataJson.waiting_approval + " </div>",
        });

        overlays.add("Activity_136cno8", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: WAITING APPROVAL ' + dataJson.waiting_approval + " </div>",
        });

        overlays.add("Activity_0hzulev", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: VERIFIED DOKUMEN ' + dataJson.waiting_approval + " </div>",
        });

        overlays.add("Activity_1qk238x", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: WAITING APPROVAL ' + dataJson.waiting_approval + " </div>",
        });

        overlays.add("Activity_18uzooa", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: VERIFIED ' + dataJson.verified + " </div>",
        });

        overlays.add("Activity_0nmr3cx", "note2", {
          position: { top: 82, right: 95 },
          show: { minZoom: 0.7 },
          html: '<div class="diagram-note"> STATUS: VERIFIED ' + dataJson.verified + " </div>",
        });

        // Colors
        var elementToColor = elementRegistry.get("Activity_1444sng");

        modeling.setColor([elementToColor], {
          stroke: "green",
          fill: "rgb(152, 203, 152)",
        });

        // Option 3: Color via Marker + CSS Styling
        canvas.addMarker("OrderReceivedEvent", "highlight");
      });

      // load + show diagram
      $.get("vms.bpmn", showDiagram, "text");
    });
});
