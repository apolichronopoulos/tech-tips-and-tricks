// Author: (APO) Alexandros Polichronopoulos
// Created on: 2023-07-10

// Usage: Run the script in any Azure Key Vault to load the whole list automatically.
// Azure KeyVault load more button is like this:
// <a role="button" aria-label="Load more items" class="azc-grid-pageable-loadMoreContainer" href="#" data-bind="attr: { &quot;aria-controls&quot;: $ctl.id }, visible: $ctl.getPlugin(&quot;azc-grid-pageable&quot;).options.showLabel" aria-controls="grid17e6a337f-26de-4017-9095-3cd4c407c05d"> <span class="azc-grid-pageable-loadMoreLabel" data-bind="visible: !$ctl.getPlugin(&quot;azc-grid-pageable&quot;).options.loading(), text: $ctl.getPlugin(&quot;azc-grid-pageable&quot;).options.label">Load more</span> <span class="azc-grid-pageable-loadMoreIcon fxs-display-none" data-bind="visible: $ctl.getPlugin(&quot;azc-grid-pageable&quot;).options.loading, css: { &quot;azc-grid-pageable-showLoadingIcon&quot;: $ctl.getPlugin(&quot;azc-grid-pageable&quot;).options.loading }"></span> </a>

// Command to trigger load more button
// document.getElementsByClassName("azc-grid-pageable-loadMoreContainer")[0].click()

// Command to check if load more is there, to avoid a loading more loop
// document.getElementsByClassName("azc-grid-pageable-loadMoreContainer")[0].checkVisibility()

function loadMoreSecretsOnKeyVault(){
    i = 0
    while (i < 20) {
    	setTimeout(function () {
            if (document.getElementsByClassName("azc-grid-pageable-loadMoreContainer")[0].checkVisibility() == true) {
      	        document.getElementsByClassName("azc-grid-pageable-loadMoreContainer")[0].click()
    	    }
    	}, (2000 + i * 1000));
    	i++;
    };
}

loadMoreSecretsOnKeyVault();