<?php
/**
 * CreateScheduledPackagesResponseTest
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
use SpApi\Model\easyship\v2022_03_23\CreateScheduledPackagesResponse;

/**
 * CreateScheduledPackagesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the bulk scheduling API. It returns by the bulk scheduling API containing an array of the scheduled packtages, an optional list of orders we couldn&#39;t schedule with the reason, and a pre-signed URL for a ZIP file containing the associated shipping labels plus the documents enabled for your marketplace.
 * @package     SpApi
 */
class CreateScheduledPackagesResponseTest extends TestCase
{

    private CreateScheduledPackagesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateScheduledPackagesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateScheduledPackagesResponse"
     */
    public function testCreateScheduledPackagesResponse()
    {
        $this->assertInstanceOf(CreateScheduledPackagesResponse::class, $this->model);
    }

    /**
     * Test attribute "scheduled_packages"
     */
    public function testPropertyScheduledPackages()
    {
        $testValue = [];
        
        $this->model->setScheduledPackages($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledPackages());
    }

    /**
     * Test attribute "rejected_orders"
     */
    public function testPropertyRejectedOrders()
    {
        $testValue = [];
        
        $this->model->setRejectedOrders($testValue);
        $this->assertEquals($testValue, $this->model->getRejectedOrders());
    }

    /**
     * Test attribute "printable_documents_url"
     */
    public function testPropertyPrintableDocumentsUrl()
    {
        $testValue = 'test';
        
        $this->model->setPrintableDocumentsUrl($testValue);
        $this->assertEquals($testValue, $this->model->getPrintableDocumentsUrl());
    }
}
