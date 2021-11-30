import containerMargin from './dynamic-container-margin.js';

containerMargin();

// Change container margin on window resize
$(window).resize(() => containerMargin());

// Change container margin on container resize
$('.container').resize(() => containerMargin());