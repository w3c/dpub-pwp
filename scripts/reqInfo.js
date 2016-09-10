var reqInfo = [
	{
		"number": 1,
		"content": "The publication should be readable in a browser",
		"title": "Req. 1",
		"id": "r_browser"
	},
	{
		"number": 2,
		"content": "PWPs should be able to make use of all facilities offered by the OWP",
		"title": "Req. 2",
		"id": "r_owp"
	},
	{
		"number": 3,
		"content": "It should be possible to see the publication in a “paginated” view",
		"title": "Req. 3",
		"id": "r_pag"
	},
	{
		"number": 4,
		"content": "The same PWP should be available both online and offline",
		"title": "Req. 4",
		"id": "r_onloffl"
	},
	{
		"number": 5,
		"content": "There should be a smooth transition between offline and online states of the same publication",
		"title": "Req. 5",
		"id": "r_statetrans"
	},
	{
		"number": 6,
		"content": "It should be possible to create and distribute a PWP as a uniquely identified single resource unit",
		"title": "Req. 6",
		"id": "r_uniqres"
	},
	{
		"number": 7,
		"content": "A publication may consist of a collection of resources",
		"title": "Req. 7",
		"id": "r_pwpcoll"
	},
	{
		"number": 8,
		"content": "The notion of a PWP should enable specific publications like audio books, graphics books, and mixed media",
		"title": "Req. 8",
		"id": "r_multimedia"
	},
	{
		"number": 9,
		"content": "The reader must have the possibility to personalize his or her reading experience",
		"title": "Req. 9",
		"id": "r_p13n"
	},
	{
		"number": 10,
		"content": "The publication must be discoverable",
		"title": "Req. 10",
		"id": "r_discover"
	},
	{
		"number": 11,
		"content": "There should be a way to control versioning and revisioning",
		"title": "Req. 11",
		"id": "r_version"
	},
	{
		"number": 12,
		"content": "There should be a way to differentiate between essential and non-essential resources",
		"title": "Req. 12",
		"id": "r_essential"
	},
	{
		"number": 13,
		"content": "A PWP should allow for access control and write protections of the resource",
		"title": "Req. 13",
		"id": "r_protections"
	},
	{
		"number": 14,
		"content": "The publication should conform to\n            all the requirements of horizontal dependencies",
		"title": "Req. 14",
		"id": "r_horizdep"
	},
	{
		"number": 15,
		"content": "User agents must treat a PWP, regardless of the number of components, as a single unit as opposed to individual documents",
		"title": "Req. 15",
		"id": "r_single"
	},
	{
		"number": 16,
		"content": "The information regarding the constituent resources of a PWP must be easily discovered",
		"title": "Req. 16",
		"id": "r_con-res"
	},
	{
		"number": 17,
		"content": "Find the (default) reading order of the resources of a PWP easily",
		"title": "Req. 17",
		"id": "r_read-order"
	},
	{
		"number": 18,
		"content": "There should be a way to uniquely identify a publication regardless of its state",
		"title": "Req. 18",
		"id": "r_uniq-id-state"
	},
	{
		"number": 19,
		"content": "The PWP needs to have an explicit\n              “offline mode” alternative",
		"title": "Req. 19",
		"id": "r_dyn-content"
	},
	{
		"number": 20,
		"content": "The distribution of a PWP should not affect its versioning",
		"title": "Req. 20",
		"id": "r_distro"
	},
	{
		"number": 21,
		"content": "The distribution of PWPs should conform to the standard processes and expectations of commercial publishing channels",
		"title": "Req. 21",
		"id": "r_process"
	},
	{
		"number": 22,
		"content": "PWPs should support cross-references that can be resolved locally or externally",
		"title": "Req. 22",
		"id": "r_cross-ref"
	},
	{
		"number": 23,
		"content": "Several PWPs may share external resources",
		"title": "Req. 23",
		"id": "r_extres"
	},
	{
		"number": 24,
		"content": "PWPs should be able to access external data",
		"title": "Req. 24",
		"id": "r_extdata"
	},
	{
		"number": 25,
		"content": "Manifests should include the technical and descriptive metadata, and basic characteristics of the constituent resources",
		"title": "Req. 25",
		"id": "r_manifest-metadata"
	},
	{
		"number": 26,
		"content": "Manifest should make it possible to provide a streamlined access to disjoint parts of the publication",
		"title": "Req. 26",
		"id": "r_streamlining"
	},
	{
		"number": 27,
		"content": "Manifest should include information of new content",
		"title": "Req. 27",
		"id": "r_changenotice"
	},
	{
		"number": 28,
		"content": "Manifest should include means to use links to resources, regardless of location",
		"title": "Req. 28",
		"id": "r_manifest-links"
	},
	{
		"number": 29,
		"content": "The manifest may include alternative reading orders",
		"title": "Req. 29",
		"id": "r_manifest-reading"
	},
	{
		"number": 30,
		"content": "The access methods for retrieving a manifest should allow for significant flexibility",
		"title": "Req. 30",
		"id": "r_manifest-flex"
	},
	{
		"number": 31,
		"content": "There should be a possibility to combine manifests from several origins",
		"title": "Req. 31",
		"id": "r_manifest-comb"
	},
	{
		"number": 32,
		"content": "A common, state-independent locator needs to exist",
		"title": "Req. 32",
		"id": "r_locator-ind-dep"
	},
	{
		"number": 33,
		"content": "There must also be a separation between state-independent and state-dependent locators",
		"title": "Req. 33",
		"id": "r_locator_fi_fd"
	},
	{
		"number": 34,
		"content": "It should be possible to use, in all circumstances, a relative locator to refer to content within a PWP",
		"title": "Req. 34",
		"id": "r_locator-rel"
	},
	{
		"number": 35,
		"content": "When providing a pointer to any or all of a publication, this should be robust across <a href=\"#states\">states</a>",
		"title": "Req. 35",
		"id": "r_locator-state"
	},
	{
		"number": 36,
		"content": "Identifiers must be persistent and usable across states, and not conflict with locators",
		"title": "Req. 36",
		"id": "r_identifier"
	},
	{
		"number": 37,
		"content": "The locations of all PWP components should be discoverable",
		"title": "Req. 37",
		"id": "r_archdisc"
	},
	{
		"number": 38,
		"content": "There should be a way to discover that a new version of one or more PWP components have been published",
		"title": "Req. 38",
		"id": "r_archnewvers"
	},
	{
		"number": 39,
		"content": "There should be a way to discover that one or more new components have been added to a PWP",
		"title": "Req. 39",
		"id": "r_archnewcomp"
	},
	{
		"number": 40,
		"content": "There should be a way to discover that one or more PWP components have been removed from a PWP",
		"title": "Req. 40",
		"id": "r_archdelcomp"
	},
	{
		"number": 41,
		"content": "There should be a way to indicate whether one or more PWP components contain structured descriptive metadata",
		"title": "Req. 41",
		"id": "r_archmetadata"
	},
	{
		"number": 42,
		"content": " Accessibility of a PWP must be discoverable",
		"title": "Req. 42",
		"id": "r_acc-metadata"
	},
	{
		"number": 43,
		"content": "A PWP must support the ability to include multiple renditions of a publication",
		"title": "Req. 43",
		"id": "r_acc-alt-media"
	},
	{
		"number": 44,
		"content": "A PWP needs to support the ability to construct a limited package with only a subset of the necessary content",
		"title": "Req. 44",
		"id": "r_custompwp"
	},
	{
		"number": 45,
		"content": "A PWP needs to support both time-based media and text",
		"title": "Req. 45",
		"id": "r_time"
	},
	{
		"number": 46,
		"content": "When annotations are distributed and associated with a PWP, the content of the annotation must be compatible with assistive technology",
		"title": "Req. 46",
		"id": "r_acc-annotation"
	},
	{
		"number": 47,
		"content": "User agents must be allowed to limit the capabilities of a PWP",
		"title": "Req. 47",
		"id": "r_sec-limit"
	},
	{
		"number": 48,
		"content": "It should be possible to discover the capabilities a PWP will have access to",
		"title": "Req. 48",
		"id": "r_sec-discovery"
	},
	{
		"number": 49,
		"content": "PWP authors should be able to embed guidance policies in their documents that inform the user agent of their preferences as to how the integrity and security of the document itself should be preserved",
		"title": "Req. 49",
		"id": "r_sec-integrity"
	},
	{
		"number": 50,
		"content": "User agents may provide a method for escalating trust",
		"title": "Req. 50",
		"id": "r_sec-trust"
	}
]