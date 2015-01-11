/* Reminder: always indent with 4 spaces (no tabs). */
// +---------------------------------------------------------------------------+
// | Geeklog 2.0                                                               |
// +---------------------------------------------------------------------------+
// | Javascript functions for WYSIWYG HTML Editor Integration into Geeklog     |
// |                                                                           |
// +---------------------------------------------------------------------------+
// | Copyright (C) 2003-2013 by the following authors:                         |
// |                                                                           |
// | Authors:   Blaine Lang       - blaine AT portalparts DOT com              |
// |            Yoshinori Tahara  - dengenxp AT gmail DOT com                  |
// +---------------------------------------------------------------------------+
// |                                                                           |
// | This program is free software; you can redistribute it and/or             |
// | modify it under the terms of the GNU General Public License               |
// | as published by the Free Software Foundation; either version 2            |
// | of the License, or (at your option) any later version.                    |
// |                                                                           |
// | This program is distributed in the hope that it will be useful,           |
// | but WITHOUT ANY WARRANTY; without even the implied warranty of            |
// | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             |
// | GNU General Public License for more details.                              |
// |                                                                           |
// | You should have received a copy of the GNU General Public License         |
// | along with this program; if not, write to the Free Software Foundation,   |
// | Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.           |
// |                                                                           |
// +---------------------------------------------------------------------------+

window.onload = function() {
    AdvancedEditor.newEditor({
        TextareaId:[
            {plain:'html_content', advanced:'adv_content'}
        ],
        toolbar:1
    });
}

// Override event listener
AdvancedEditor.onchange_editmode = function() {
    if (AdvancedEditor.isAdvancedMode()) {
        document.getElementById('advanced_editarea').style.display = '';
        document.getElementById('sel_toolbar').style.display = '';
        document.getElementById('html_editarea').style.display = 'none';
    } else {
        document.getElementById('advanced_editarea').style.display = 'none';
        document.getElementById('sel_toolbar').style.display = 'none';
        document.getElementById('html_editarea').style.display = '';
    }
    AdvancedEditor.swapEditorContent();
}
