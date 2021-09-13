var MODEL = function() {
    let homeContent = `<div class="homeContent">
    <div class="homeContent__image">
        <h1 class="homeContent__image__text">Company Name</h1>
    </div>
    <div class="homeContent__body">
        <div class="homeContent__body__column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptate, nobis nulla voluptatum sit ea, veniam, aspernatur quisquam optio repellendus fugit. Maiores enim dicta beatae voluptatibus animi iste consectetur dolor.
        </div>
        <div class="homeContent__body__column">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla, facere voluptatum adipisci rerum a ullam quos deleniti distinctio nemo labore exercitationem. Magni ratione pariatur, autem enim explicabo voluptas voluptatum!
        </div>
    </div>
</div>`;
    let aboutContent = `<div class="aboutContent">
    <div class="aboutContent__image">
        <h1 class="aboutContent__image__text">We Know Numbers</h1>
    </div>
    <div class="aboutContent__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatibus possimus commodi ea odio neque quasi deserunt quos odit, cupiditate velit. Asperiores necessitatibus placeat quidem ab dignissimos omnis iusto facere.
        Eius enim corporis a reiciendis ea ab vel consectetur voluptatem voluptate facilis saepe illum dolores odio magnam fuga quibusdam, voluptatum dicta accusamus sit, corrupti praesentium sunt! Non cum error nisi?
        Omnis ab est molestias possimus perspiciatis obcaecati, sunt blanditiis autem illo quasi doloribus labore molestiae repudiandae nobis tempora praesentium nulla totam quaerat, itaque ducimus dolores laborum! Cum fugiat debitis mollitia!
        Fugiat sit voluptatibus nemo tempora odit assumenda at doloremque delectus magnam doloribus, quis explicabo, voluptate sunt vel qui ipsum? Inventore perferendis officia optio, voluptatem laborum aliquam incidunt rerum non nobis!
        Eos cupiditate perspiciatis magnam. Provident, dignissimos ut. Ea, officia? Rerum deleniti, pariatur blanditiis officiis maiores necessitatibus aut debitis sit incidunt fugiat! Laboriosam modi corrupti ab et nesciunt, voluptatum nam sunt!
    </div>
</div>`;
    let servicesContent = `<div class="servicesContent">
    <div class="servicesContent__image">
        <div class="servicesContent__image__text">
            <h1>Analyzing the Data</h1>
        </div>
    </div>
    <div class="servicesContent__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus culpa quia provident quam odio a hic illum beatae tenetur dignissimos. Voluptates eligendi in quisquam, sapiente expedita et eaque cum quam voluptate. Nisi possimus molestias porro vitae reiciendis optio quaerat! Sed temporibus voluptatibus eius voluptas velit autem corporis veritatis laborum iste, alias dolore labore explicabo praesentium adipisci quod aliquid culpa eligendi eos dignissimos facilis doloremque dolores officiis hic nemo? Nisi dicta molestiae in, ullam fuga inventore perferendis animi modi magnam iste eveniet quisquam minima vitae veritatis fugiat molestias aut praesentium? Velit sint id, doloribus culpa eligendi ex quia quod consequuntur quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error consequuntur nobis, animi omnis soluta qui sequi expedita ratione beatae dignissimos quos ex eius totam commodi libero nam quam quia impedit facere, quas inventore excepturi distinctio! Architecto, suscipit corrupti. A atque beatae alias similique! Facilis tenetur soluta odit magnam, dolorum mollitia, architecto ab, iure aperiam consectetur error? Aspernatur sunt at molestiae impedit, placeat quis ad pariatur excepturi sint delectus, et ea optio veniam quod expedita.</p>
    </div>
</div>`;
    let contactContent = `<div class="contactContent">
    <form class="contactContent__form" action="#">
        <h1>Contact Us!</h1>
        <input type="text" placeholder="name">
        <input type="email" placeholder="email">
        <textarea name="message" cols="30" rows="10" placeholder="message"></textarea>
        <input type="submit">
    </form>
    <div class="contactContent__map"></div>
</div>`;

function _updateContent(buttonID) {
    let contentID = buttonID + "Content";
    console.log(contentID);
    $("#content").html(eval(contentID));
}

return {
    updateContent: _updateContent
}
}();