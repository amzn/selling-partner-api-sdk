<?php
/**
 * GenerateCollectionFormResponseTest
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
use OpenAPI\Client\Model\shipping\v2\GenerateCollectionFormResponse;

/**
 * GenerateCollectionFormResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GenerateCollectionFormResponse operation.
 * @package     OpenAPI\Client
 */
class GenerateCollectionFormResponseTest extends TestCase
{

    private GenerateCollectionFormResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateCollectionFormResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateCollectionFormResponse"
     */
    public function testGenerateCollectionFormResponse()
    {
        $this->assertInstanceOf(GenerateCollectionFormResponse::class, $this->model);
    }

    /**
     * Test attribute "collections_form_document"
     */
    public function testPropertyCollectionsFormDocument()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\v2\CollectionsFormDocument();
        
        $this->model->setCollectionsFormDocument($testValue);
        $this->assertEquals($testValue, $this->model->getCollectionsFormDocument());
    }
}
