<?php
/**
 * TransferScheduleListingTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleListing;

/**
 * TransferScheduleListingTest Class Doc Comment
 *
 * @category    Class
 * @description A list of transfer schedules.
 * @package     SpApi
 */
class TransferScheduleListingTest extends TestCase
{

    private TransferScheduleListing $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferScheduleListing();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferScheduleListing"
     */
    public function testTransferScheduleListing()
    {
        $this->assertInstanceOf(TransferScheduleListing::class, $this->model);
    }

    /**
     * Test attribute "next_page_token"
     */
    public function testPropertyNextPageToken()
    {
        $testValue = 'test';
        
        $this->model->setNextPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextPageToken());
    }

    /**
     * Test attribute "transfer_schedules"
     */
    public function testPropertyTransferSchedules()
    {
        $testValue = [];
        
        $this->model->setTransferSchedules($testValue);
        $this->assertEquals($testValue, $this->model->getTransferSchedules());
    }
}
