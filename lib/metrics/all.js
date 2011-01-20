var AllViewsMetric = {
  name: 'all_views',
  initialData: {total: 0},
  interval: 50, // ms
  incrementCallback: function(view) {
    this.data.total += 1;
    this.minuteData.total = (this.minuteData.total || 0) + 1;
    var events = view.events();
    if(events) {
      var i = 0, ii = events.length;
      for(i = 0; i < ii; i += 1) {
        if (!this.initialData[events[i]]) { this.initialData[events[i]] = 0}
        this.data[events[i]] = (this.data[events[i]] || 0) + 1;
        this.minuteData[events[i]] = (this.minuteData[events[i]] || 0) + 1;
      }
    }
  }
};

for (var i in AllViewsMetric)
  exports[i] = AllViewsMetric[i];