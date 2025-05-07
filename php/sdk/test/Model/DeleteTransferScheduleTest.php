<?php
/**
 * DeleteTransferScheduleTest
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
use SpApi\Model\sellerWallet\v2024_03_01\DeleteTransferSchedule;

/**
 * DeleteTransferScheduleTest Class Doc Comment
 *
 * @category    Class
 * @description The response returned when the schedule transfer&#39;s delete request is successful.
 * @package     SpApi
 */
class DeleteTransferScheduleTest extends TestCase
{

    private DeleteTransferSchedule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeleteTransferSchedule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeleteTransferSchedule"
     */
    public function testDeleteTransferSchedule()
    {
        $this->assertInstanceOf(DeleteTransferSchedule::class, $this->model);
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $testValue = 'test';
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        $testValue = 'test';
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }

    /**
     * Test attribute "details"
     */
    public function testPropertyDetails()
    {
        $testValue = 'test';
        
        $this->model->setDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDetails());
    }
}
