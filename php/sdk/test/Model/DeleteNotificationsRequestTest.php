<?php
/**
 * DeleteNotificationsRequestTest
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
use OpenAPI\Client\Model\appIntegrations\DeleteNotificationsRequest;

/**
 * DeleteNotificationsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the &#x60;deleteNotifications&#x60; operation.
 * @package     OpenAPI\Client
 */
class DeleteNotificationsRequestTest extends TestCase
{

    private DeleteNotificationsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeleteNotificationsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeleteNotificationsRequest"
     */
    public function testDeleteNotificationsRequest()
    {
        $this->assertInstanceOf(DeleteNotificationsRequest::class, $this->model);
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
     * Test attribute "deletion_reason"
     */
    public function testPropertyDeletionReason()
    {
        $enumInstance = new DeleteNotificationsRequest();
        $allowedValues = $enumInstance->getDeletionReasonAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setDeletionReason($testValue);
        $this->assertEquals($testValue, $this->model->getDeletionReason());
    }
}
