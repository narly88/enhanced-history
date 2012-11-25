var mockChromeAPI = function() {
  return {
    i18n: {
      getMessage: jasmine.createSpy("getMessage").andCallFake(function(key, substitutions) {
        var lookup, result;
        lookup = {
          day_date: "dddd",
          formal_date: "MMMM Do YYYY",
          yesterday_link: "Yesterday",
          today_link: "Today",
          searching_title: "Searching",
          and: "and",
          informal_date: "informal date",
          default_time_format: "12",
          number_of_visits: "$number_open$$number$$number_close$ visits",
          morning: "AM",
          afternoon: "afternoon PM",
          evening: "evening PM",
          search_in_history: "Search in history",
          visits_to_domain: "Visits to domain",
          twelve_hour_time_format: "$time$ $label$",
          version_title: "version title",
          short_date: 'MMMM Do',
          short_date_with_day: 'dddd, MMMM Do',
          date_week_label: 'Week of $week$',
          prompt_title: "prompt title",
          collapse_button: "collapse",
          expand_button: "expand",
          no_visits_found: "Sorry, no visits found.",
          confirm_delete_all_visits: "Delete all visits from $formal_date$?",
          search_time_frame: "past few months",
          extended_formal_date: "dddd, MMMM Do, YYYY"
        };
        result = lookup[key] || 'translated ' + key;
        if (result && typeof(substitutions) != 'undefined') {
          _.each(substitutions, function(substitution) {
            return result = result.replace(/\$\w+\$/, substitution);
          });
        }
        return result;
      })
    },
    history: {
      search: jasmine.createSpy("search"),
      deleteRange: jasmine.createSpy("deleteRange")
    },
    browserAction: {
      onClicked: {
        addListener: jasmine.createSpy("addListener")
      }
    },
    contextMenus: {
      create: jasmine.createSpy("create").andReturn(true),
      remove: jasmine.createSpy("remove"),
      update: jasmine.createSpy("update"),
      onClicked: {
        addListener: jasmine.createSpy("addListener")
      }
    },
    tabs: {
      create: jasmine.createSpy("create"),
      get: jasmine.createSpy("get").andCallFake(function(id, callback) {
        return callback({
          url: "http://code.google.com/projects"
        });
      }),
      onSelectionChanged: {
        addListener: jasmine.createSpy("addListener")
      },
      onUpdated: {
        addListener: jasmine.createSpy("addListener")
      }
    }
  }
};
