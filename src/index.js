import _OrderedDict from './_OrderedDict' ;
import _ordereddict from './_ordereddict' ;

import { Dict } from '@aureooms/js-collections-dict' ;
import { DoublyLinkedList } from '@aureooms/js-dll' ;

const OrderedDict = _OrderedDict( Dict , Map , DoublyLinkedList ) ; // Map is the native map implementation
const ordereddict = _ordereddict( OrderedDict ) ;

export default ordereddict ;

export {
	ordereddict ,
	OrderedDict ,
	_ordereddict ,
	_OrderedDict ,
} ;

