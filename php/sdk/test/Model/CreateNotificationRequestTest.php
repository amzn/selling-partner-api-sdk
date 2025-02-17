<?php
/**
 * CreateNotificationRequestTest
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
use SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationRequest;

/**
 * CreateNotificationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the &#x60;createNotification&#x60; operation.
 * @package     SpApi
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
        $testValue = array();
        
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
