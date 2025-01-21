var viewer = new BpmnJS({
    container: '#diagram'
  });

  async function showDiagram(diagramXML) {

    await viewer.importXML(diagramXML);

    var overlays = viewer.get('overlays'),
        canvas = viewer.get('canvas'),
        elementRegistry = viewer.get('elementRegistry'),
        modeling = viewer.get('modeling');

    // Option 1: Color via Overlay
    var shape = elementRegistry.get('Activity_1444sng');

    var $overlayHtml = $('<div class="highlight-overlay">')
                            .css({
                              width: shape.width,
                              height: shape.height
                            });

    overlays.add('Activity_1444sng', {
      position: {
        top: 0,
        left: 0
      },
      html: $overlayHtml
    });

    overlays.add('Activity_0kfyw1i', "note", {
        position: { bottom: 120, right: 50 },
        show: { minZoom: 0.7 },
        html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_0k10xkn', "note", {
        position: { bottom: 120, right: 50 },
        show: { minZoom: 0.7 },
        html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_0qkc533', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_1mhe83c', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_019j69b', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_1444sng', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_14k1qr1', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_1lwv1cd', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_1ohe82d', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_16dw91q', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_0egmwhs', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_15iiq2a', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_136cno8', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_0hzulev', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_1qk238x', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_18uzooa', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    overlays.add('Activity_0nmr3cx', "note", {
      position: { bottom: 120, right: 50 },
      show: { minZoom: 0.7 },
      html: '<div class="diagram-note"> 3 </div>',
    });

    // Colors
    var elementToColor = elementRegistry.get('Activity_1444sng');

    modeling.setColor([ elementToColor ], {
      stroke: 'green',
      fill: 'rgb(152, 203, 152)'
    });

    // Option 3: Color via Marker + CSS Styling
    canvas.addMarker('OrderReceivedEvent', 'highlight');

  }

  // load + show diagram
  $.get('bpmn1.bpmn', showDiagram, 'text');