import Link from 'next/link';

export default function Pagination() {
  return (
    <div className="row no-gutters my-5">
      <div className="col text-center">
        <div className="block-27">
          <ul>
            <li><Link href="/page/[pageNumber]" as="/page/1"><i className="ion-ios-arrow-back"></i></Link></li>
            <li className="active"><span>1</span></li>
            <li><Link href="/page/[pageNumber]" as="/page/2">2</Link></li>
            <li><Link href="/page/[pageNumber]" as="/page/3">3</Link></li>
            <li><Link href="/page/[pageNumber]" as="/page/4">4</Link></li>
            <li><Link href="/page/[pageNumber]" as="/page/5">5</Link></li>
            <li><Link href="/page/[pageNumber]" as="/page/2"><i className="ion-ios-arrow-forward"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
