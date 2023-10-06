const IPTrackerFormFieldset = document.getElementById('IP_tracker_form_fieldset');

export default function toggleLoadingSpinner() {
	IPTrackerFormFieldset.toggleAttribute('disabled');
}
