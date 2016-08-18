define( [ 'plugin/charts/forms/default' ], function( default_config ) {
    return $.extend(true, {}, default_config, {
        title       : '',
        category    : '',
        library     : 'jqPlot',
        tag         : 'div',
        zoomable    : true,
        keywords    : 'medium',
        settings    : {
            x_axis_grid : {
                name        : 'x_axis_grid',
                title       : 'Axis grid',
                info        : 'Would you like to show grid lines for the X axis?',
                type        : 'select',
                display     : 'radiobutton',
                init        : 'false',
                data        : [ { label: 'On', value: 'true' }, { label: 'Off', value: 'false' } ]
            },
            y_axis_grid : {
                name        : 'y_axis_grid',
                title       : 'Axis grid',
                info        : 'Would you like to show grid lines for the Y axis?',
                type        : 'select',
                display     : 'radiobutton',
                init        : 'true',
                data        : [ { label: 'On', value: 'true' }, { label: 'Off', value: 'false' } ]
            }
        }
    });
});