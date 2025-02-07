<?php
/**
 * CreateFeedDocumentSpecificationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\feeds\v2021_06_30\CreateFeedDocumentSpecification;

/**
 * CreateFeedDocumentSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the content type for the createFeedDocument operation.
 * @package     OpenAPI\Client
 */
class CreateFeedDocumentSpecificationTest extends TestCase
{

    private CreateFeedDocumentSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFeedDocumentSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFeedDocumentSpecification"
     */
    public function testCreateFeedDocumentSpecification()
    {
        $this->assertInstanceOf(CreateFeedDocumentSpecification::class, $this->model);
    }

    /**
     * Test attribute "content_type"
     */
    public function testPropertyContentType()
    {
        $testValue = 'test';
        
        $this->model->setContentType($testValue);
        $this->assertEquals($testValue, $this->model->getContentType());
    }
}
