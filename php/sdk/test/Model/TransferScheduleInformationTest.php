<?php
/**
 * TransferScheduleInformationTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleInformation;

/**
 * TransferScheduleInformationTest Class Doc Comment
 *
 * @category    Class
 * @description Mandatory information for initiating a schedule transfer.
 * @package     SpApi
 */
class TransferScheduleInformationTest extends TestCase
{

    private TransferScheduleInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferScheduleInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferScheduleInformation"
     */
    public function testTransferScheduleInformation()
    {
        $this->assertInstanceOf(TransferScheduleInformation::class, $this->model);
    }

    /**
     * Test attribute "schedule_start_date"
     */
    public function testPropertyScheduleStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setScheduleStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduleStartDate());
    }

    /**
     * Test attribute "schedule_end_date"
     */
    public function testPropertyScheduleEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setScheduleEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduleEndDate());
    }

    /**
     * Test attribute "schedule_expression"
     */
    public function testPropertyScheduleExpression()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\ScheduleExpression();
        
        $this->model->setScheduleExpression($testValue);
        $this->assertEquals($testValue, $this->model->getScheduleExpression());
    }

    /**
     * Test attribute "schedule_type"
     */
    public function testPropertyScheduleType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\ScheduleTransferType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setScheduleType($testValue);
        $this->assertEquals($testValue, $this->model->getScheduleType());
    }
}
