<?php
/**
 * TransferScheduleStatusTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleStatus;

/**
 * TransferScheduleStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The schedule status of the transfer.
 * @package     SpApi
 */
class TransferScheduleStatusTest extends TestCase
{

    private TransferScheduleStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferScheduleStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferScheduleStatus"
     */
    public function testTransferScheduleStatus()
    {
        $this->assertInstanceOf(TransferScheduleStatus::class, $this->model);
    }
}
