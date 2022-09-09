import { Transfer } from "../../generated/USDT/USDT"
import { Transfer as TransferEntity } from "../../generated/schema"

export function handleTransfer(event: Transfer): void {
    const transfer = new TransferEntity(event.transaction.hash.toHexString())

    transfer.from = event.params.from
    transfer.to = event.params.to
    transfer.value = event.params.value.toBigDecimal()

    transfer.save()
}
