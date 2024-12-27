<?php
/**
 * CreateNotificationRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\appintegrations\CreateNotificationRequest;

/**
 * CreateNotificationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the &#x60;createNotification&#x60; operation.
 * @package     OpenAPI\Client
 */
class CreateNotificationRequestTest extends TestCase
{

    private CreateNotificationRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateNotificationRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateNotificationRequest"
     */
    public function testCreateNotificationRequest()
    {
        $this->assertInstanceOf(CreateNotificationRequest::class, $this->model);
    }

    /**
     * Test attribute "template_id"
     */
    public function testPropertyTemplateId()
    {
        $testValue = 'test';
        
        $this->model->setTemplateId($testValue);
        $this->assertEquals($testValue, $this->model->getTemplateId());
    }

    /**
     * Test attribute "notification_parameters"
     */
    public function testPropertyNotificationParameters()
    {
        
        $testValue = new array<string,object>();
        
        $this->model->setNotificationParameters($testValue);
        $this->assertEquals($testValue, $this->model->getNotificationParameters());
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
}
