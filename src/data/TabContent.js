export const TabContent = {
  Form: (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  ),
  Text: (
    <div>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  ),
  Images: (
    <div className="row">
      <div className="col-lg-4">
        <img
          src="https://picsum.photos/id/237/536/354"
          class="img-thumbnail"
          alt="..."
        />
      </div>
      <div className="col-lg-4">
        <img
          src="https://picsum.photos/seed/picsum/536/354"
          class="img-thumbnail"
          alt="..."
        />
      </div>
      <div className="col-lg-4">
        <img
          src="https://picsum.photos/id/1084/536/354?grayscale"
          class="img-thumbnail"
          alt="..."
        />
      </div>
      <div className="col-lg-4">
        <img
          src="https://picsum.photos/id/1060/536/354?blur=2"
          class="img-thumbnail"
          alt="..."
        />
      </div>
      <div className="col-lg-4">
        <img
          src="https://picsum.photos/536/354"
          class="img-thumbnail"
          alt="..."
        />
      </div>
    </div>
  ),
  Video: (
    <iframe
      className="w-100 h-40vh"
      src="https://www.youtube.com/embed/CTgIOft0-TU?autoplay=1&controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  ),
};
