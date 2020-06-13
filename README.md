# dlt-logs README

[![Version](https://vsmarketplacebadge.apphb.com/version/mbehr1.dlt-logs.svg)](https://marketplace.visualstudio.com/items?itemName=mbehr1.dlt-logs)

This Visual Studio Code(tm) extension adds support to open DLT (diagnostic log and trace, see [GENIVI](https://at.projects.genivi.org/wiki/display/PROJ/Diagnostic+Log+and+Trace) or [AUTOSAR](https://www.autosar.org/fileadmin/user_upload/standards/foundation/1-0/AUTOSAR_PRS_DiagnosticLogAndTraceProtocol.pdf)) files.

![main view](https://github.com/mbehr1/dlt-logs/raw/master/images/dlt-logs-main1.png)

**Note:** It works well with [![Version](https://vsmarketplacebadge.apphb.com/version/mbehr1.smart-log.svg)](https://marketplace.visualstudio.com/items?itemName=mbehr1.smart-log) **smart-log** extension and supports the "time-sync" feature. (todo picture/animation...)

## Features

- Open DLT files without any size restriction. (Tested with ~500MB files)
- **Time sync** feature.
  - Calculates time for each line based on timestamp and reception/storage time.
  - An offset for the full time can be set via context menu item *adjust-time...*.
  - If a time was received already the *adjust-time...* will propose to adjust/sync that line to the selected one.
  - Posts events of the selected time to other documents/plugins. (See ... <todo>).
- Detects the lifecycles and shows them in a tree-view.
  - Lifecycles can be graphically decorated by defining *dlt-log.decorations* with id 'lifecycleEven' (for the lifecycles #0, #2,...) / 'lifecycleOdd' (for the lifecycles #1,#3,...). Default decorations contains light transparent green(dark)/gray(light) background for 'lifecycleOdd'. Only the ECU with the highest amount of messages will be decorated.
- Allows to filter for:
  - ECUID
  - APID
  - CTID
  - MSTP
  - log level min/max
  - payload (by "contains" simple string or regex match).

- Filters can be *added* based on the hover text of a log line. The filter settings will be prefilled with ECU, APID, CTID.
- Filters can be *edited* and *deleted* (press option key at the edit icon) from the *filters* tree view.
- Adding or editing filters menu allows to select ECUs, APIDs, CTIDs from the descriptions found in the loaded log file.

- Support **DLT file transfer** file extraction (and automatic filtering of FLDA msgs). Shows the file transfers and allows to save any file.
- **Quickly configurable columns**. Simply press the "select columns..." button in upper right corner of the document and select which one to show. The changes get stored permanently as global settings `dlt-logs.columns`.
![Quickly configureable columns](https://github.com/mbehr1/dlt-logs/raw/master/images/selectColumns.png)
- **Graphical time series reports** based on event filters. You can define event filters (type: 3), add normal filters and use a payloadRegex that captures either one value or even multiple values with named capture groups (?<series_name>.*). All captures needs to represent numbers. Grid lines for lifecycle start/ends are automatically added. To open a report simply press on the "report" icon next to the filter.
![Graphical time series reports](https://github.com/mbehr1/dlt-logs/raw/master/images/timeSeriesReport1.png)

The extension uses telemetry with two events (`activate` (no parameters) and `open file` (file size as parameter)) if telemetry is activated within your general configuration.

## Planned features

- Allow filter add/edit for report, timesync, MSTP and log levels (currently only possible via JSON configuration)
- Make filters configurable per file or "use-case".
- Check whether revaling the line on broadcasted time is possible if document is hidden/not visible.
- Sort msgs within lifecycles by timestamp (maintaining orig index as e.g. hover info)
- Support easier splitting of huge files into files per lifecycle and offer "assistant" at opening of huge files.
- Allow merging/opening of multiple DLT files.
- Check default colors on multiple color themes. Check color contrast to background.
- Support time synchronized split-view between e.g. two APIDs from within one DLT log file.
- Use the outline view for lifecycles, errors,...
- Add support for file changes (growing) and load/update automatically.
- Allow changing filter configurations manually at runtime.
- Saving of logs/selections allowing e.g. to add comments as proper logs.
- Use custom editor interface to be able to support regular file open mechanism.
- Add full non-verbose support including mapping table and payload args.

## Extension Settings

This extension contributes the following settings:

* `dlt-logs.fileExtensions`: Specifies the file extensions to use for file open dialog. Defaults to .dlt|.DLT.
* `dlt-logs.maxNumberLogs`: Specified the maximum number of DLT logs that get displayed in one page. If more logs exist - considering the active filters - a paging mechanism is in place that starts rendering a new page at 4/5th of the page boundary. Searching is limited to the visible page. Defaults to 1mio logs. Depending on your machines performance/RAM you might reduce/increase this. Best case is to find a limit/config where all logs fit into that range (use filter!).
* `dlt-logs.reReadTimeout`: Specified the timeout in ms after opening the file before starting to parse the dlt file. If the file doesn't open, increase this to e.g. 5s.
* `dlt-logs.columns`: Specifies which columns are visible. See example config. Usually doesn't need to be changed manually but by button "select columns".
* `dlt-logs.filters`: Configures the filter that are available.
   There are four type of filters:
   * **positive**: filter need to match to include the message in the view. If no positive filter exists all msgs are assumed matching.
   * **negative**: if filter matches the message will not be included in the view.
   * **marker**: if filter matches the messages will be "marked"/decorated.
   * **event**: used for time-sync event detection or for report generation. For reports the payloadRegex must be used and capture data. If the capture group name starts with "STATE_" distinct/"state"/"level" values are assumed. Otherwise linear (float-)values. By default report filters are added into the last active report window. If you want to add another report window use the "alt/option".

   Currently filter can match for:
   * **ecu**: the ECU identifier.
   * **apid**: the APID (application identifier).
   * **ctid**: the CTID (context identifier).
   * **mstp**: the message type (log, control, trace, network).
   * **logLevelMin/Max**: min/max log level.
   * **payload**: payload text contained.
   * **payloadRegex**: regular expression to match payload text.

   Filter can be:
   * **enabled**: filter is enabled and will be applied.
   * **atLoadTime**: filter is used already at file load/opening time (only pos/neg filters). This reduces the memory-load with huge files significantly but the filter can't be turned off once the file is opened. Take care: this changes the index of the message and might impact the lifecycle detection as well (todo improve later).

   Marker filter can be highlighted / **decorated** either by
   * **filterColour**: css colour code to use (e.g. #f0f0f0 or 'red', etc.) or
   * **decorationId**: id of a defined **decoration** configured with dlt-logs.decorations.

   For time-sync feature event filter can be used:
   * **timeSyncId**: id of the event that will be broadcasted.
   * **timeSyncPrio**: prio of the event.
   (todo describe time-sync feature with an example)

   For report generation filter can contain:
   * **reportOptions**: object that can contain:
     * **valueMap**: object that can contain keys matching to the captured data names and the property is an array with objects { capturedName : newName }. 
     E.g."reportOptions": { "valueMap": { "STATE_onOff": [ { "1": "on" }, { "0": "off" }, {"ff": "invalid" }]}}

   Filter configuration changes will be applied on next file open. If you use *add filter...*, *edit filter...*, *delete filter...* menu items they will be applied instantly to the configuration. You should not mix manual editing the config files with usage of the menu items as long as a dlt file is opened.

   Details see (todo...).
* `dlt-logs.plugins`: Allows configuration of plugins. Currently one plugin is supported:
  * **name** : **"FileTransfer"** plugin
  * **enabled**: determines whether the plugin is enabled.
  * **allowSave**: can be used to disable saving capability. Can be used if you're not interested in the files but still want to see any transfers. Reduces memory consumption.
  * **keepFLDA**: if enabled the FLDA messages are visible in the logs (if no other filter removes them). Default is to not show the FLDA messages.
  * **apid**: restrict searching for file transfer messages to this APID. Can be empty (as by spec). If you know the APID providing this speeds up processing.
  * **ctid**: restrict searching for file transfer message to this CTID. Can be empty (as by spec). 
  
* `dlt-logs.decorations`: Definition of the decoration types supported for marker filters.

## Known Issues

Little testing especially on different endianess.

* Marker filters only partially implemented yet. 3 hard-coded filters are highlighting log levels warning, error and fatal if the decorationIds "warning", "error" and "fatal" do exist.
* Endianess is not tested/implemented! If you send me a DLT log with different endianess I'll implement it.

## Contributions

Any and all test, code or feedback contributions are welcome.
Open an [issue](https://github.com/mbehr1/dlt-logs/issues) or create a pull request to make this extension work better for all.

[![Donations](https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2ZNMJP5P43QQN&source=url) Donations are welcome! (Contact me for commercial use or different [license](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)).

## Release Notes

See [Changelog](./CHANGELOG.md)

## Third-party Content

This project leverages the following third party content.

binary-parser (1.6.2)
 - License: MIT https://github.com/keichi/binary-parser/blob/master/LICENSE.md
 - Source: https://github.com/keichi/binary-parser

momentjs.com (2.13.0)
 - License: MIT
 - Source: https://momentjs.com

chartjs.org (2.9.3)
 - License: MIT https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 - Source: https://github.com/chartjs/Chart.js

chartjs-plugin-colorschemes
  - License: MIT https://github.com/nagix/chartjs-plugin-colorschemes/blob/master/LICENSE.md
  - Source: https://github.com/nagix/chartjs-plugin-colorschemes

chartjs-plugin-zoom (0.7.5)
  - License: MIT https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md
  - Source: https://github.com/chartjs/chartjs-plugin-zoom

hammer.js (2.0.8)
  - License: MIT https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md
  - Source: https://github.com/hammerjs/hammer.js

color-name (1.1.4)
 - Licence: MIT https://github.com/colorjs/color-name/blob/master/LICENSE
 - Source: https://github.com/colorjs/color-name

<!--
* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
-->
