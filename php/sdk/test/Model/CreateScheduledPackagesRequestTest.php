<?php
/**
 * CreateScheduledPackagesRequestTest
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
use SpApi\Model\easyship\v2022_03_23\CreateScheduledPackagesRequest;

/**
 * CreateScheduledPackagesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the POST /easyShip/2022-03-23/packages/bulk API.
 * @package     SpApi
 */
class CreateScheduledPackagesRequestTest extends TestCase
{

    private CreateScheduledPackagesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateScheduledPackagesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateScheduledPackagesRequest"
     */
    public function testCreateScheduledPackagesRequest()
    {
        $this->assertInstanceOf(CreateScheduledPackagesRequest::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "order_schedule_details_list"
     */
    public function testPropertyOrderScheduleDetailsList()
    {
        $testValue = [];
        
        $this->model->setOrderScheduleDetailsList($testValue);
        $this->assertEquals($testValue, $this->model->getOrderScheduleDetailsList());
    }

    /**
     * Test attribute "label_format"
     */
    public function testPropertyLabelFormat()
    {
        $enumInstance = new \SpApi\Model\easyship\v2022_03_23\LabelFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelFormat($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormat());
    }
}
