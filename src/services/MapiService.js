class MapiService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public';
  _apiAuthToken = '?ts=1&apikey=de7de875822f0542d42da393063f90dc&hash=bdebe5737c6cceb18b985bd6c15b3f45';
  async getResource(url) {
    const  res = await fetch(`${this._apiBase}${url}${this._apiAuthToken}`);
    if(!res.ok) {
      throw new Error(`Could not fetch $(url)`+ `, recived ${res.status}` );
    }
    return await  res.json();
  }

  async getAllComics() {
    const  resposne =  await this.getResource('/comics');
    return resposne.data.results;
  }

  async getAllCharacters() {
    const  resposne =  await this.getResource('/characters');
    return resposne.data.results;
  }

  async getAllSeries() {
    const  resposne =  await this.getResource('/series');
    return resposne.data.results;
  }

  async getAllStories() {
    const  resposne =  await this.getResource('/stories');
    return resposne.data.results;
  }

  async getComic(id) {
    const  resposne =  await this.getResource(`/comics/${id}`);
    return resposne.data.results;
  }

  async getCharacter(id) {
    const  resposne =  await this.getResource(`/characters/${id}`)
    return resposne.data.results;
  }

  async getSeries(id) {
    const  resposne =  await this.getResource(`/series/${id}`);
    return resposne.data.results;
  }

  async getStory(id) {
    const  resposne =  await this.getResource(`/stories/${id}`);
    return resposne.data.results;
  }

}

export default MapiService;
